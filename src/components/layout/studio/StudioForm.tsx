"use client";

import Container from "@/components/ui/common/Container";
import FormGroup from "@/components/ui/form/FormGroup";
import { categories } from "@/data/categories";
import { amenities } from "@/data/amenities";
import React, { ComponentPropsWithoutRef } from "react";
import {
  PiTextT,
  PiSquaresFour,
  PiUsers,
  PiShieldCheck,
  PiMapPin,
  PiImage,
  PiCurrencyDollar,
} from "react-icons/pi";
import { studioStore } from "@/lib/studioActions";
import { TStudio } from "@/types";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

type StudioFormProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioForm(props: StudioFormProps) {
  const { className, children, ...rest } = props;

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const formDataObj = {
      title: formData.get("title"),
      category: formData.get("category"),
      capacity: Number(formData.get("capacity")),
      hourlyRate: Number(formData.get("hourlyRate")),
      deposit: Number(formData.get("deposit")),
      address: formData.get("address"),
      imageUrl: formData.get("imageUrl"),
      amenities: formData.getAll("amenities"),
      overview: formData.get("overview"),
    };

    const res = await studioStore(formDataObj as TStudio);
    if (res.isSuccess) {
      toast.success("Studio Added Successfully!");
      redirect("/studios");
    }
  }

  return (
    <Container className={`${className ? className : ""}`} {...rest}>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormGroup labelText="Studio Title" errorText={""}>
          <label className="input w-full">
            <PiTextT className="opacity-50" />
            <input
              type="text"
              name="title"
              placeholder="Studio Title"
              required
            />
          </label>
        </FormGroup>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup labelText="Category" errorText={""}>
            <label className="select w-full">
              <PiSquaresFour className="opacity-50" />
              <select name="category" defaultValue="" required>
                <option value="" disabled>
                  Pick a Category
                </option>
                {categories.map((item) => (
                  <option key={item.id} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
          </FormGroup>

          <FormGroup labelText="Max Creator Capacity" errorText={""}>
            <label className="input w-full">
              <PiUsers className="opacity-50" />
              <input
                type="number"
                name="capacity"
                min={1}
                placeholder="Max Creator Capacity"
                required
              />
            </label>
          </FormGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup labelText="Hourly Rate" errorText={""}>
            <label className="input w-full">
              <PiCurrencyDollar className="opacity-50" size={18} />
              <input
                type="number"
                name="hourlyRate"
                min={0}
                placeholder="Rate per hour"
                required
              />
              <span className="badge badge-neutral badge-xs">/ hour</span>
            </label>
          </FormGroup>

          <FormGroup labelText="Security Deposit" errorText={""}>
            <label className="input w-full">
              <PiShieldCheck className="opacity-50" />
              <input
                type="number"
                name="deposit"
                min={0}
                placeholder="Refundable security deposit"
              />
            </label>
          </FormGroup>
        </div>

        <FormGroup labelText="Full Address" errorText={""}>
          <label className="input w-full">
            <PiMapPin className="opacity-50" />
            <input
              type="text"
              name="address"
              placeholder="Studio Location"
              required
            />
          </label>
        </FormGroup>

        <FormGroup labelText="Studio Image URL" errorText={""}>
          <label className="input w-full">
            <PiImage className="opacity-50" />
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/studio.jpg"
            />
          </label>
        </FormGroup>

        <FormGroup labelText="Amenities" errorText={""}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {amenities.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="amenities"
                  value={item}
                  className="checkbox checkbox-sm"
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </FormGroup>

        <FormGroup labelText="Overview / Note" errorText={""}>
          <textarea
            name="overview"
            rows={5}
            className="textarea w-full"
            placeholder="Describe the studio, house rules, or anything creators should know..."
          />
        </FormGroup>

        {children}

        <div className="flex justify-end gap-3">
          <button type="reset" className="btn btn-ghost">
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Create Studio
          </button>
        </div>
      </form>
    </Container>
  );
}

export default StudioForm;
