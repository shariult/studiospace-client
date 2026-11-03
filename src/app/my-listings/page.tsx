"use client";

import Link from "next/link";
import Container from "@/components/ui/common/Container";
import StudioCell from "@/components/ui/table/StudioCell";
import { categories } from "@/data/categories";
import { PiEye, PiPencilSimple, PiTrash } from "react-icons/pi";
import { formatPrice } from "@/lib/utils";
import { TStudio } from "@/types";

const listings: Pick<
  TStudio,
  | "id"
  | "title"
  | "address"
  | "imageUrl"
  | "category"
  | "hourlyRate"
  | "deposit"
  | "capacity"
>[] = [
  {
    id: "1",
    title: "Sunlight Photo Studio",
    address: "Banani, Dhaka",
    imageUrl: "https://placehold.co/96x96",
    category: "photography",
    hourlyRate: 40,
    deposit: 100,
    capacity: 8,
  },
];

const getCategoryTitle = (slug: string) =>
  categories.find((c) => c.slug === slug)?.title ?? slug;

export default function MyListingsPage() {
  const handleDelete = (id: string) => {
    if (!confirm("Delete this listing?")) return;
    console.log("delete", id);
  };

  return (
    <Container>
      <h1 className="mb-6 text-2xl font-semibold">My Listings</h1>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
              <tr key={item.id}>
                <td>
                  <StudioCell
                    imageUrl={item.imageUrl}
                    title={item.title}
                    address={item.address}
                  />
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {getCategoryTitle(item.category)}
                  </span>
                </td>
                <td>{formatPrice(item.hourlyRate)} / hr</td>
                <td>{formatPrice(item.deposit)}</td>
                <td>{item.capacity} people</td>
                <td>
                  <div className="flex justify-end gap-1">
                    <Link
                      href={`/studios/${item.id}`}
                      className="btn btn-ghost btn-square btn-sm tooltip text-xl"
                      data-tip="Show"
                      aria-label="Show"
                    >
                      <PiEye />
                    </Link>

                    <Link
                      href={`/my-listings/${item.id}/edit`}
                      className="btn btn-ghost btn-square btn-sm tooltip text-xl"
                      data-tip="Edit"
                      aria-label="Edit"
                    >
                      <PiPencilSimple />
                    </Link>

                    <button
                      type="button"
                      className="btn btn-ghost btn-square btn-sm tooltip text-error text-xl"
                      data-tip="Delete"
                      aria-label="Delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      <PiTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
