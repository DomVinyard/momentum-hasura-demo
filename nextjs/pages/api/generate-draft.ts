import type { NextApiRequest, NextApiResponse } from "next";
import runGPTQuery from "../../lib/gpt-query";
import { NextResponse } from "next/server";
import users from "../../mock_data/users";
import org from "../../mock_data/org";

export default async function handler(req: any, res: any) {
  try {
    const urlSearchParams = new URLSearchParams(req.url.split("?")[1]);
    console.log(urlSearchParams);
    const userID = urlSearchParams.get("userID");
    const draft = urlSearchParams.get("draft");
    const user = await users.find((u) => u.id == userID);
    const response =
      (await runGPTQuery({
        query: `
        Your user's job is to write emails
        The user has described themselves with the following information, please ensure this information is used to write the email in the correct tone of voice:
        - ${org?.employee.about?.join("\n - ")}

        

        Your user's organisation is called ${org.name}
        ${org.name} is ${org.overview}
        Here is some information about ${
          org.name
        }, only use the information that is relevant to the email:
        - ${org.recent_updates.join("\n - ")}

        You are writing an email to ${user?.name}
        ${user?.name} has donated ${user?.lifetime_giving}.

        This is a history of all communication so far if you need it:
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

        Here is some personal information about ${user?.name} if you need it:
        - ${user?.information?.map((i) => i.information).join("\n - ")}


        Write a email to ${user?.name}.
        The purpose of the email is: ${draft}.
        Keep the email short and on topic. Ignore any irrelevant information, even if it is included above.
         `,
        system: `
        
        `,
      })) ?? "";

    if (!response) throw new Error("No response from GPT");

    return res.send({ response });
  } catch (error: any) {
    return res.error({ error });
  }
}
