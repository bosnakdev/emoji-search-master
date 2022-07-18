
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('Emoji Search Test', () => {
  let title, emojilist, input;
  beforeAll(() => {
    console.log("Emoji Search test başlıyor.");
  });

  beforeEach(() => {
    render(<App />);
    title = screen.getByText("Emoji Search");
    emojilist = screen.getAllByText("Click to copy emoji");
    input = screen.getByPlaceholderText("Type Emoji name...");

  })

  test('Başlık var mı?', () => {
    expect(title);
  });

  test('Emojiler listeleniyor mu?', () => {
    expect(emojilist.length).toEqual(20);
  });

  test('Emoji ara ve listeleniyor mu kontrol et.', () => {
    userEvent.type(input, "Smile");
    const result = screen.getAllByText("Click to copy emoji");

    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  test('Emojiye tıkla ve kopyalandı mı kontrol et.', () => {
    const emoji = screen.getAllByText("Click to copy emoji");
    userEvent.click(emoji[0]);
    expect(screen.getAllByText("Copied!"));
  });
});

