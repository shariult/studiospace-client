"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import {
  PiTextT,
  PiSquaresFour,
  PiUsers,
  PiShieldCheck,
  PiMapPin,
  PiImage,
  PiCurrencyDollar,
} from "react-icons/pi";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import Container from "@/components/ui/common/Container";
import FormGroup from "@/components/ui/form/FormGroup";
import { studioStore, studioUpdate } from "@/lib/studioActions";
import { categories } from "@/data/categories";
import { amenities } from "@/data/amenities";
import { TStudio, TStudioInput } from "@/types";
import { delay, isValidNum, isValidStr } from "@/lib/utils";

type StudioFormProps = {
  type: "store" | "update";
  studioData?: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

type StudioFormErrors = Partial<Record<keyof TStudioInput, string>>;

const emptyForm: TStudioInput = {
  title: "",
  category: "",
  capacity: 0,
  hourlyRate: 0,
  deposit: 0,
  address: "",
  imageUrl: "",
  amenities: [] as string[],
  overview: "",
};

function StudioForm(props: StudioFormProps) {
  const { studioData, type, className, children, ...rest } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ ...emptyForm, ...studioData });
  const [formError, setFormError] = useState<StudioFormErrors>();

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, checked } = e.target;

    setFormData((prev) => {
      if (name === "amenities") {
        return {
          ...prev,
          amenities: checked
            ? [...prev.amenities, value]
            : prev.amenities.filter((item) => item !== value),
        };
      }

      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const formDataObj = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      capacity: Number(formData.get("capacity")),
      hourlyRate: Number(formData.get("hourlyRate")),
      deposit: Number(formData.get("deposit")),
      address: formData.get("address") as string,
      imageUrl: formData.get("imageUrl") as string,
      amenities: formData.getAll("amenities"),
      overview: formData.get("overview") as string,
    };
    const errObj: StudioFormErrors = {
      title: !isValidStr(formDataObj.title)
        ? "Please enter a studio title."
        : undefined,
      category: !isValidStr(formDataObj.category)
        ? "Please select a category."
        : undefined,
      capacity: !isValidNum(formDataObj.capacity, 1)
        ? "Capacity must be a number of at least 1."
        : undefined,
      hourlyRate: !isValidNum(formDataObj.hourlyRate, 0)
        ? "Please enter an hourly rate of 0 or more."
        : undefined,
      deposit: !isValidNum(formDataObj.deposit, 0)
        ? "Please enter a security deposit of 0 or more."
        : undefined,
      address: !isValidStr(formDataObj.address)
        ? "Please enter the studio's full address."
        : undefined,
      imageUrl: !isValidStr(formDataObj.imageUrl)
        ? "Please enter a valid image URL (e.g. https://example.com/studio.jpg)."
        : undefined,
      amenities: !Array.isArray(formDataObj.amenities)
        ? "Something went wrong with the amenities selection. Please try again."
        : undefined,
    };
    const hasError = Object.values(errObj).some((error) => error !== undefined);
    if (hasError) {
      setIsLoading(false);
      setFormError(errObj);
      toast.error("Please check form inputs!");
      return;
    }

    if (type === "store") {
      const res = await studioStore(formDataObj as TStudio);
      if (res.isSuccess) {
        setIsLoading(false);
        toast.success("Studio added successfully!");
        redirect("/studios");
      } else {
        setIsLoading(false);
        toast.error("Something went wrong!");
      }
    }

    if (type === "update") {
      const res = await studioUpdate({
        ...formDataObj,
        _id: studioData?._id,
      } as TStudio);

      if (res.isSuccess) {
        setIsLoading(false);
        toast.success("Studio updated successfully!");
        redirect(`/studios/${studioData?._id}`);
      } else {
        setIsLoading(false);
        toast.error("Something went wrong!");
      }
    }
  }

  return (
    <Container className={`${className ? className : ""}`} {...rest}>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormGroup labelText="Studio Title" errorText={formError?.title}>
          <label className="input w-full">
            <PiTextT className="opacity-50" />
            <input
              type="text"
              name="title"
              placeholder="Studio Title"
              value={formData.title}
              onChange={inputChangeHandler}
              disabled={isLoading}
            />
          </label>
        </FormGroup>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup labelText="Category" errorText={formError?.category}>
            <label className="select w-full">
              <PiSquaresFour className="opacity-50" />
              <select
                name="category"
                defaultValue={formData.category}
                disabled={isLoading}
              >
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

          <FormGroup
            labelText="Max Creator Capacity"
            errorText={formError?.capacity}
          >
            <label className="input w-full">
              <PiUsers className="opacity-50" />
              <input
                type="number"
                name="capacity"
                min={1}
                placeholder="Max Creator Capacity"
                value={formData.capacity}
                onChange={inputChangeHandler}
                disabled={isLoading}
              />
            </label>
          </FormGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup labelText="Hourly Rate" errorText={formError?.hourlyRate}>
            <label className="input w-full">
              <PiCurrencyDollar className="opacity-50" size={18} />
              <input
                type="number"
                name="hourlyRate"
                min={0}
                placeholder="Rate per hour"
                value={formData.hourlyRate}
                onChange={inputChangeHandler}
                disabled={isLoading}
              />
              <span className="badge badge-neutral badge-xs">/ hour</span>
            </label>
          </FormGroup>

          <FormGroup
            labelText="Security Deposit"
            errorText={formError?.deposit}
          >
            <label className="input w-full">
              <PiShieldCheck className="opacity-50" />
              <input
                type="number"
                name="deposit"
                min={0}
                placeholder="Refundable security deposit"
                value={formData.deposit}
                onChange={inputChangeHandler}
                disabled={isLoading}
              />
            </label>
          </FormGroup>
        </div>

        <FormGroup labelText="Full Address" errorText={formError?.address}>
          <label className="input w-full">
            <PiMapPin className="opacity-50" />
            <input
              type="text"
              name="address"
              placeholder="Studio Location"
              value={formData.address}
              onChange={inputChangeHandler}
              disabled={isLoading}
            />
          </label>
        </FormGroup>

        <FormGroup labelText="Studio Image URL" errorText={formError?.imageUrl}>
          <label className="input w-full">
            <PiImage className="opacity-50" />
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/studio.jpg"
              value={formData.imageUrl}
              onChange={inputChangeHandler}
              disabled={isLoading}
            />
          </label>
        </FormGroup>

        <FormGroup labelText="Amenities" errorText={formError?.amenities}>
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
                  checked={formData.amenities.includes(item)}
                  onChange={inputChangeHandler}
                  disabled={isLoading}
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </FormGroup>

        <FormGroup labelText="Overview / Note" errorText={formError?.overview}>
          <textarea
            name="overview"
            rows={5}
            className="textarea w-full"
            placeholder="Describe the studio, house rules, or anything creators should know..."
            defaultValue={formData.overview}
            disabled={isLoading}
          />
        </FormGroup>

        {children}

        <div className="flex justify-end gap-3">
          <button type="reset" className="btn btn-ghost" disabled={isLoading}>
            Reset
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading && (
              <span className="loading loading-spinner loading-xs"></span>
            )}
            {type === "store" ? "Create" : "Update"} Studio
          </button>
        </div>
      </form>
    </Container>
  );
}

export default StudioForm;
