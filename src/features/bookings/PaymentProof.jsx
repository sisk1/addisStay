import { HiOutlinePhoto } from "react-icons/hi2";

function PaymentPoof({ proofUrl }) {
  return (
    <a href={proofUrl} target="_blank" className="flex items-center gap-2">
      <HiOutlinePhoto className="text-2xl" />
      Payment proof
    </a>
  );
}

export default PaymentPoof;
