import Container from "@/components/ui/common/Container";
import React from "react";
import { PiCheckCircle, PiMapPin, PiStarFill } from "react-icons/pi";

function LoadingStudioShow() {
  return (
    <>
      <Container
        el={"header"}
        className="px-6"
        boxClassName={`space-y-3 bg-gray-50 dark:bg-gray-900 rounded-lg`}
        setYSpace="py-12"
      >
        <span className="badge badge-neutral w-40 h-8 skeleton"></span>
        <h1 className="text-3xl font-semibold sm:text-4xl w-full h-12 skeleton"></h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base-content/70">
          <p className="flex items-center gap-1.5">
            <PiMapPin aria-hidden className="size-5" />
            <span className="inline-block w-20 h-8 skeleton"></span>
          </p>
          <p className="flex items-center gap-1.5">
            <PiStarFill aria-hidden className="size-5 text-warning" />
            <span>
              <span className="sr-only">Rating: </span>
              <span className="inline-block w-8 h-8 skeleton"></span>
            </span>
          </p>
        </div>
      </Container>

      <Container
        className="px-6"
        boxClassName={`grid gap-6 lg:grid-cols-3`}
        setXSpace="px-0"
        setYSpace="py-8"
      >
        <div className="lg:col-span-2 aspect-16/10 w-full bg-base-100 skeleton"></div>

        <dl className="grid grid-cols-2 content-start gap-3 lg:grid-cols-1">
          {[1, 2, 3, 4, 5].map((stat) => (
            <div
              key={stat}
              className="rounded-box border border-base-300 bg-base-100 p-4"
            >
              <dt className="text-sm text-base-content/70 w-full skeleton"></dt>
              <dd className="mt-1 text-xl font-semibold w-full skeleton"></dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container
        className="px-6 "
        boxClassName={`grid items-start gap-8 lg:grid-cols-3`}
        setYSpace="pt-6 pb-20"
        setXSpace=""
      >
        <div className="space-y-8 lg:col-span-2">
          <div className="space-y-3 p-6 rounded-md bg-base-50 dark:bg-base-900">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="max-w-prose leading-relaxed text-base-content/80 w-full h-20 bg-base-100 skeleton"></p>
          </div>

          <div className="space-y-3 p-6 rounded-md bg-base-50 dark:bg-base-900">
            <h2 className="text-xl font-semibold">Amenities</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((amenity) => (
                <li key={amenity} className="flex items-center gap-2">
                  <PiCheckCircle
                    aria-hidden
                    className="size-5 shrink-0 text-success"
                  />
                  <span className="w-40 h-6 bg-base-100 dark:bg-base-900 skeleton"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

export default LoadingStudioShow;
