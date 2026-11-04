import Link from "next/link";
import Container from "@/components/ui/common/Container";
import StudioCell from "@/components/ui/table/StudioCell";
import { categories } from "@/data/categories";
import { PiEye, PiPencilSimple, PiTrash } from "react-icons/pi";
import { formatPrice } from "@/lib/utils";
import { myListings } from "@/lib/studioActions";
import StudioDelete from "@/components/layout/studio/StudioDelete";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";

const getCategoryTitle = (slug: string) =>
  categories.find((c) => c.slug === slug)?.title ?? slug;

async function MyListingsPage() {
  const res = await myListings();
  let listings = res.isSuccess ? res.data : [];
  const breadcrumbData = [
    {
      id: 1,
      label: "My Listings",
    },
  ];
  return (
    <>
      <div className="max-w-330 mx-auto p-6">
        <Breadcrumbs data={breadcrumbData} />
      </div>
      <Container>
        <h1 className="mb-6 text-2xl font-semibold">My Listings</h1>

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 dark:bg-gray-900">
          <table className="table">
            <thead>
              <tr>
                <th>Studio Space</th>
                <th>Category</th>
                <th>Hourly Rate</th>
                <th>Deposit</th>
                <th>Capacity</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {listings.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center opacity-60">
                    You have no listings yet.
                  </td>
                </tr>
              )}

              {listings.map((item) => (
                <tr key={item._id}>
                  <td className="min-w-60">
                    <StudioCell
                      imageUrl={item.imageUrl}
                      title={item.title}
                      address={item.address}
                    />
                  </td>
                  <td className="min-w-40">
                    <span className="badge badge-ghost badge-sm">
                      {getCategoryTitle(item.category)}
                    </span>
                  </td>
                  <td>{formatPrice(item.hourlyRate)} / hr</td>
                  <td>{formatPrice(item.deposit)}</td>
                  <td>{item.capacity} people</td>
                  <td>
                    <div className="flex justify-end gap-1 text-2xl">
                      <Link
                        href={`/studios/${item._id}`}
                        className="btn btn-ghost btn-square btn-sm tooltip text-xl"
                        data-tip="Show"
                        aria-label="Show"
                      >
                        <PiEye />
                      </Link>

                      <Link
                        href={`/studios/edit/${item._id}`}
                        className="btn btn-ghost btn-square btn-sm tooltip text-xl"
                        data-tip="Edit"
                        aria-label="Edit"
                      >
                        <PiPencilSimple />
                      </Link>

                      <StudioDelete data={item} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
export default MyListingsPage;
