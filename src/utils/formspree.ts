/**
 * Formspree Integration Utility
 * Handles form submissions to Formspree endpoint https://formspree.io/f/mjyvqglo
 */

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjyvqglo";

export interface FormspreeResponse {
  ok: boolean;
  error?: string;
}

export async function sendToFormspree(data: Record<string, unknown>): Promise<FormspreeResponse> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return { ok: true };
    }

    const errorData = await response.json().catch(() => ({}));
    const errorMessage = Array.isArray(errorData?.errors) 
      ? errorData.errors.map((e: { message?: string }) => e.message || "Error").join(", ")
      : errorData?.error || "Unable to deliver message at this time.";

    return { ok: false, error: errorMessage };
  } catch (err: unknown) {
    console.error("Formspree submission network error:", err);
    return { ok: false, error: err instanceof Error ? err.message : "Network error. Please check your connection." };
  }
}
