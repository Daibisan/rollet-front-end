import { API_BASE_URL } from "@/config/api.js";

export default async function randomize(persons, team_count) {
    //     {
    //     "people": [
    //         { "name": "Alice", "role": "Backend Developer" },
    //         { "name": "Bob", "role": "Frontend Developer" }
    //     ],
    //     "team_count": 2
    //      }
    const newPersons = persons.map((p) => {
        return {
            name: p.person_name,
            role: p.person_role,
        };
    });
    const data = {
        people: newPersons,
        team_count
    };
    // console.log(data);

    try {
        const response = await fetch(`${API_BASE_URL}/v1/random/default`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("Success:", responseData);
        return responseData;
    } catch (error) {
        console.error("Error sending data:", error);
        throw error;
    }
}
