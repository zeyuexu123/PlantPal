import { describe, it, expect, vi } from "vitest";
import fetch from "node-fetch";
import { searchPlant } from "../../src/api/trefle.mjs";

vi.mock("node-fetch");

describe("searchPlant()", () => {
    it("calls the Trefle API correctly", async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => ({ data: [{ common_name: "Coconut palm" }] }),
        });

        const res = await searchPlant("coconut");
        expect(fetch).toHaveBeenCalledWith(expect.stringContaining("coconut"));
        expect(res.data[0].common_name).toBe("Coconut palm");
    });
});