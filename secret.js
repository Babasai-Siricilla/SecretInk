let mode = "encode";

const message = document.getElementById("message");
const result = document.getElementById("result");
const status = document.getElementById("status");
const mainBtn = document.querySelector(".main-btn");

function setMode(value) {
  mode = value;
  mainBtn.textContent =
    mode === "encode" ? "Encode Message" : "Decode Message";

  message.value = "";
  result.value = "";
  status.textContent = "";
  message.placeholder = mode === "encode"
    ? "Enter your message..."
    : "Paste encoded message...";
}

function processMessage() {
  const text = message.value;

  if (!text.trim()) {
    status.textContent = "Please enter a message!";
    return;
  }

  try {
    if (mode === "encode") {
      result.value = Array.from(new TextEncoder().encode(text))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
    } else {
      const code = text.trim();

      if (!/^(?:[0-9a-fA-F]{2})+$/.test(code)) {
        throw new Error("Invalid encoded message!");
      }

      const bytes = new Uint8Array(
        code.match(/.{2}/g).map(byte => parseInt(byte, 16))
      );

      result.value = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    }

    status.textContent = "Done successfully!";
  } catch {
    result.value = "";
    status.textContent = "Invalid encoded message!";
  }
}

async function copyMessage() {
  if (!result.value) {
    status.textContent = "Nothing to copy!";
    return;
  }

  try {
    await navigator.clipboard.writeText(result.value);
    status.textContent = "Copied successfully!";
  } catch {
    result.select();
    status.textContent = "Select and copy the result manually.";
  }
}

function clearAll() {
  message.value = "";
  result.value = "";
  status.textContent = "";
}