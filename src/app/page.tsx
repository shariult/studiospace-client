import { delay } from "@/lib/utils";

async function Home() {
  await delay(3000);
  return (
    <main>
      <h1>StudioSpace Client</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error
        quia quasi animi id vero. Quis quisquam accusamus neque aliquam
        accusantium, officiis ullam, culpa sunt delectus distinctio illum nam
        amet!
      </p>
    </main>
  );
}

export default Home;
