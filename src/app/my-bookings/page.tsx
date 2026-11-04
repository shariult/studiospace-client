import BookingTable from "@/components/layout/booking/BookingTable";
import Container from "@/components/ui/common/Container";
import { bookingIndex } from "@/lib/bookingActions";
import { studioShow } from "@/lib/studioActions";
import { TBooking, TStudio } from "@/types";

async function MyBookingsPage() {
  const res = await bookingIndex();

  if (res.isSuccess) {
    return (
      <Container>
        <h1 className="mb-6 text-2xl font-semibold">My Bookings</h1>
        <BookingTable bookings={res.data} />
      </Container>
    );
  }
}
export default MyBookingsPage;
