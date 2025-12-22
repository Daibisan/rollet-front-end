import Papa from "papaparse";

export default function exportCsvHandler(newTeams, history_index = null) {
    // Check empty teams
    if (newTeams.teams[0].members[0].role === "-") {
        alert("Teams are empty");
    } else {
        let csvReady_teams = [];

        // Reformat teams[] data to CSV-ready JSON
        newTeams.teams.forEach((team, i) => {
            team.members.forEach((person) => {
                csvReady_teams.push({
                    team: i + 1,
                    name: person.name,
                    role: person.role,
                });
            });
        });

        // PAPA unparse JSON -> CSV
        const unparsed_teams = Papa.unparse(csvReady_teams);

        // Virtual file (stored in browser's RAM)
        const blob = new Blob([unparsed_teams], {
            type: "text/csv;charset=utf-8;",
        });

        // Temp URL (for <a>'s href)
        const url = URL.createObjectURL(blob);

        // Download to user device
        const link = document.createElement("a");
        link.href = url;

        link.download = "Teams_exported.csv";
        if (history_index) {
            link.download = `Project${history_index}_exported.csv`;
        }
        link.click();
    }
}
