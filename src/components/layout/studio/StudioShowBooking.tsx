import React, { ComponentPropsWithoutRef } from "react";
import { PiCheckCircle } from "react-icons/pi";
import Container from "@/components/ui/common/Container";
import { formatPrice } from "@/lib/utils";
import { TStudio } from "@/types";

type StudioShowBookingProps = {
  data: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioShowBooking(props: StudioShowBookingProps) {
  const { data, className, children, ...rest } = props;
  const total = Number(data.hourlyRate) + Number(data.deposit);

  return (
    <Container
      boxClassName={`${className ? className : ""}`}
      setYSpace="py-0"
      setXSpace="px-0"
      {...rest}
    >
      <aside className="lg:sticky lg:top-6">
        <div className="card border border-base-300 bg-base-100">
          <div className="card-body gap-5 p-5">
            <div>
              <span className="text-2xl font-semibold">
                {formatPrice(data.hourlyRate)}
              </span>
              <span className="text-base-content/70"> / hour</span>
            </div>

            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-base-content/70">
                  {formatPrice(data.hourlyRate)} / hour
                </dt>
                <dd>{formatPrice(data.hourlyRate)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-base-content/70">Refundable deposit</dt>
                <dd>{formatPrice(data.deposit)}</dd>
              </div>
              <div className="flex justify-between border-t border-base-300 pt-3 text-base font-semibold">
                <dt>Total due</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>

            <button type="button" className="btn btn-primary w-full">
              Book this studio
            </button>

            <div className="space-y-1 text-sm text-base-content/70">
              <h3 className="font-medium text-base-content">
                Cancellation policy
              </h3>
              <p>You can cancel anytime before the booking is approved.</p>
            </div>
          </div>
        </div>
      </aside>
    </Container>
  );
}

export default StudioShowBooking;
