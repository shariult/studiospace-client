import React from "react";
import Image from "next/image";
import UserDemoImg from "@/components/ui/user/UserDemoImg";
import { getCurrentUser } from "@/lib/userActions";
import ProfileForm from "@/components/ui/user/ProfileForm";
import ProfileSignOut from "@/components/ui/user/ProfileSignOut";

async function ProfilePage() {
  const data = (await getCurrentUser())?.user;

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-6">
      <div className="px-6 text-center mb-6">
        <h2 className="heading-2 font-bold mx-auto">My Profile</h2>
        <p className=" text-gray-500 capitalize">Update your account info.</p>
      </div>

      <div className="max-w-150 mx-auto flex flex-col justify-center gap-6">
        <div className="bg-white rounded-md py-4 px-6 flex items-center gap-4 shadow">
          <div>
            {!data?.image && <UserDemoImg name={data?.name ?? "U"} />}
            {data?.image && (
              <Image
                alt="Tailwind CSS Navbar component"
                src={data?.image}
                width="40"
                height="40"
              />
            )}
          </div>
          <div>
            <p className="text-lg font-semibold">{data?.name}</p>
            <p className="text-sm -mt-1 text-gray-500">{data?.email}</p>
          </div>

          <ProfileSignOut />
        </div>

        <div className="bg-white rounded-md p-6 shadow">
          <ProfileForm data={data!} />
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
