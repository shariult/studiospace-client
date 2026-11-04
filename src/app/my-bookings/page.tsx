import BookingTable from "@/components/layout/booking/BookingTable";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";
import Container from "@/components/ui/common/Container";
import { bookingIndex } from "@/lib/bookingActions";

async function MyBookingsPage() {
  const res = await bookingIndex();

  if (res.isSuccess) {
    const breadcrumbData = [
      {
        id: 1,
        label: "My Bookings",
      },
    ];

    return (
      <>
        <div className="max-w-330 mx-auto p-6">
          <Breadcrumbs data={breadcrumbData} />
        </div>
        <Container>
          <h1 className="mb-6 text-2xl font-semibold">My Bookings</h1>
          <BookingTable bookings={res.data} />
        </Container>
      </>
    );
  }
}
export default MyBookingsPage;
