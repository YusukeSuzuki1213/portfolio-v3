import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCheckCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  message: string;
  icon: IconDefinition;
  iconColor: string;
  onCloseClicked: () => void;
};

export default function Notification(props: Props) {
  return (
    <div className="flex items-center p-4 rounded-lg shadow text-gray-300 bg-black border border-neutral-700">
      <div
        className={`inline-flex items-center justify-center ${props.iconColor}`}
      >
        <FontAwesomeIcon icon={props.icon} className="w-6 h-6" />
      </div>
      <div className="ml-4 text-sm font-normal whitespace-pre-wrap">
        {props.message}
      </div>
      <button
        type="button"
        className="ml-6 inline-flex items-center justify-center p-2 text-gray-500 hover:text-white bg-black"
        onClick={() => props.onCloseClicked()}
      >
        <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
      </button>
    </div>
  );
}
