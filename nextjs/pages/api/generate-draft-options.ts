import runGPTQuery from "../../lib/gpt-query";
import { NextResponse } from "next/server";
import org from "../../mock_data/org";
import users from "../../mock_data/users";

export default async function handler(req: any, res: any) {
  try {
    const userID = req.url.split("userID=")[1];
    const user = await users.find((u) => u.id == userID);
    const response =
      (await runGPTQuery({
        query: `
        You are writing on behalf of a user who works for an organisation
        Your user's organisation is called ${org.name}
        ${org.name} is ${org.overview}

        The user has described themselves with the following information:
        - ${org?.employee.about?.join("\n - ")}

        ${org.name} is happy to share the following information
        ${org.recent_updates.join("\n")}

        You are writing an email to ${user?.name}
        John smith has donated ${user?.lifetime_giving}.

        Your user tries to contact ${
          org.name
        } intermittently to build relationships and inform of any useful updates.

        This is a history of all communication so far:
        ----
        ${user?.correspondance
          ?.map(
            (c) =>
              `${c.direction === "inbound" ? user.name : org.name} said: ${
                c.content
              }`
          )
          .join("\n")}

        ----

        Here is some personal information about ${user?.name}
        - ${user?.information?.map((i) => i.information).join("\n - ")}


        Provide a list of reasons that the user might want to email ${
          user?.name
        }.

        Respond with an array in the following format: ["General catchup", "Ask if they wans a call", "Describe initiative x", "ask about personal information x"]
        `,
        system: `
        
        `,
      })) ?? "";

    if (!response) throw new Error("No response from GPT");

    res.send({ response: JSON.parse(response) });
  } catch (error: any) {
    return res.send({ error });
  }
}
