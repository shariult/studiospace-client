type StudioCellProps = {
  imageUrl: string;
  title: string;
  address: string;
};

function StudioCell({ imageUrl, title, address }: StudioCellProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="avatar">
        <div className="h-12 w-12 rounded-box">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-sm opacity-50">{address}</div>
      </div>
    </div>
  );
}

export default StudioCell;
