import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen text-white">
      <section className="remove-scrollbar container my-auto flex-1">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/hospital.png"
            height={2000}
            width={2000}
            alt="patient"
            className="mb-12 h-20 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Hospital
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <div className="w-1/2">
        <Image
          src="/assets/images/group.webp"
          width={1000}
          height={1000}
          alt="doctor's group image"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
