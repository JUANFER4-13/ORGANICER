const API_KEY = "sk-proj-1wiZFaUx8QFcuykHaehKT3BlbkFJJRGMWAhbvrX7YLJzatzL";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
     messages: [
       {"role": "user", "content": prompt}
     ]
      
    }),
  });

  const data = await response.json();
  console.log(data)
  return data;
}

getCompletion()

const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
  console.log(prompt.value);

  if (!prompt.value) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt.value);
  console.log(response);
  output.innerHTML = response.choices[0].text;
});
