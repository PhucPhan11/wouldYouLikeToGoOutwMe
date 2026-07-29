import { saveDateSelection } from './date-selection-webhook';

describe('saveDateSelection', () => {
  const payload = {
    date: 'Thursday, Jul 30',
    time: '5:00 PM',
    activity: 'Food'
  };

  beforeEach(() => {
    spyOn(window, 'fetch').and.resolveTo(new Response());
  });

  it('posts the selection as JSON', async () => {
    await saveDateSelection(payload);

    expect(window.fetch).toHaveBeenCalledWith(
      'https://script.google.com/macros/s/AKfycbxLSvMHdUI7zs1rIJYKr3epj0r7_NU0uYnRqEi9DE_KDlJTWO7u5CtwKmmNta9GDCwNOg/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );
  });

  it('retries with no-cors when the JSON request is blocked', async () => {
    const fetchSpy = window.fetch as jasmine.Spy;
    fetchSpy.and.callFake(() =>
      fetchSpy.calls.count() === 1
        ? Promise.reject(new TypeError('Failed to fetch'))
        : Promise.resolve(new Response())
    );

    await saveDateSelection(payload);

    expect(window.fetch).toHaveBeenCalledTimes(2);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://script.google.com/macros/s/AKfycbxLSvMHdUI7zs1rIJYKr3epj0r7_NU0uYnRqEi9DE_KDlJTWO7u5CtwKmmNta9GDCwNOg/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
      }
    );
  });

  it('resolves when both requests fail', async () => {
    const fetchSpy = window.fetch as jasmine.Spy;
    fetchSpy.and.rejectWith(new TypeError('Failed to fetch'));

    await expectAsync(saveDateSelection(payload)).toBeResolved();
  });
});
