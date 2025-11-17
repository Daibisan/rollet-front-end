export default async function fetchTeams() {
    const res = await fetch("/data/teams__dummy.json");
    return await res.json();
}
