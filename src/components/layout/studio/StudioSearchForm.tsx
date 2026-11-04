import React, { ComponentPropsWithoutRef } from "react";

type StudioSearchFormProps = {
  catQuery: string;
  searchQuery: string;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function StudioSearchForm(props: StudioSearchFormProps) {
  const { searchQuery, catQuery, className } = props;

  return (
    <form
      action="/studios"
      method="GET"
      role="search"
      className={`join w-full sm:max-w-md mb-4 ${className ? className : ""}`}
    >
      {catQuery && <input type="hidden" name="category" value={catQuery} />}
      <input
        type="search"
        name="search"
        defaultValue={searchQuery}
        placeholder="Search studios..."
        className="input join-item w-full"
      />
      <button type="submit" className="btn btn-primary join-item">
        Search
      </button>
    </form>
  );
}

export default StudioSearchForm;
