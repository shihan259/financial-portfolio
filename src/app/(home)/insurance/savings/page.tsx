import NavHeader from "@/app/_components/nav-header/nav-header";

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
}

export default async function Page() {
  await fetchData();

  return (
    <>
      <NavHeader
        currentPageTitle="Savings"
        previousPageLinks={{
          Insurance: "/insurance",
        }}
      />
      <div className="center">Insurance</div>
      <p>asdasda</p>
    </>
  );
}
