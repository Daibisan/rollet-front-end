export default async function fetchHistory() {
    const res = await fetch("/data/history__dummy.json");
    return await res.json();
}
