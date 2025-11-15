import fetch from "node-fetch";

const TREFLE_TOKEN = process.env.TREFLE_TOKEN || "TREFLE_TOKEN";
const TREFLE_BASE_URL = `https://trefle.io/api/v1/species/search?token=${TREFLE_TOKEN}&q=`;

export async function searchPlant(q) {
    try {
        const response = await fetch(TREFLE_BASE_URL + encodeURIComponent(q));
        const json = await response.json();
        return json;
    } catch (err) {
        console.error("Error fetching from Trefle API:", err);
        return { data: [] };
    }
}