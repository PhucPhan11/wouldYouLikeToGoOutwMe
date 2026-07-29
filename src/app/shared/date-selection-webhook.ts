export interface DateSelectionPayload {
  readonly date: string;
  readonly time: string;
  readonly activity: string;
}

const dateSelectionWebhookUrl =
  'https://script.google.com/macros/s/AKfycbxLSvMHdUI7zs1rIJYKr3epj0r7_NU0uYnRqEi9DE_KDlJTWO7u5CtwKmmNta9GDCwNOg/exec';

export function saveDateSelection(payload: DateSelectionPayload): Promise<void> {
  const body = JSON.stringify(payload);

  return fetch(dateSelectionWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .catch(() =>
      fetch(dateSelectionWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body
      })
    )
    .then(() => undefined)
    .catch(() => undefined);
}
