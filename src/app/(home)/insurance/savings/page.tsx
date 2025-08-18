import NavHeader from "@/components/ui/nav-header/nav-header";

export default function Page() {
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
