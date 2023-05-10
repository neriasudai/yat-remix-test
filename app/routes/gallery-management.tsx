import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";

export type Brand = {
  name: string;
  image: string;
  brandId: any;
  brandMembers: string[];
};
import { BeafImagesGrid } from "~/components/BeafImagesGrid";

const GalleryManagementParentRoute = () => {
  return (
    <>
      <BeafImagesGrid />
    </>
  );
};

export default GalleryManagementParentRoute;
