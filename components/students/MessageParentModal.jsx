"use client";

import { useState } from "react";

import {
  HiOutlineXMark,
  HiOutlinePaperAirplane,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const MessageParentModal = ({ student, close }) => {
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  if (!student) return null;

  const templates = [
    "Attendance Update",
    "Academic Progress",
    "Behaviour",
    "Custom",
  ];

  const sendMessage = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert(`Message sent to ${student.name}'s parent`);

      close();
    }, 1500);
  };

  return (
    <div
      className="
      fixed inset-0
      bg-black/30
      backdrop-blur-sm
      z-[70]

      flex
      items-center
      justify-center
      p-4
      "
    >
      <div
        className="
        bg-white
        w-full
        max-w-xl

        rounded-[32px]

        p-7
        "
      >
        {/* HEADER */}

        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-xl">Message Parent</h2>

            <p className="text-gray-500 text-sm mt-1">{student.name}</p>
          </div>

          <button
            onClick={close}
            className="
            p-2
            rounded-xl
            hover:bg-gray-100
            "
          >
            <HiOutlineXMark />
          </button>
        </div>

        {/* TEMPLATES */}

        <div className="mt-6">
          <p className="font-medium mb-3">Quick Templates</p>

          <div className="flex flex-wrap gap-3">
            {templates.map((template) => (
              <button
                key={template}
                onClick={() =>
                  setMessage(
                    `Hello, I would like to discuss ${template.toLowerCase()} regarding ${student.name}.`,
                  )
                }
                className="
                  px-4
                  py-2

                  rounded-full

                  bg-gray-100

                  hover:bg-gray-200
                  "
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        {/* MESSAGE */}

        <div className="mt-6">
          <textarea
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write message..."
            className="
            w-full

            border
            border-gray-200

            rounded-2xl

            p-4

            resize-none
            outline-none
            "
          />
        </div>

        {/* BUTTON */}

        <button
          disabled={loading}
          onClick={sendMessage}
          className="
          mt-6

          w-full

          py-4

          rounded-2xl

          text-white

          flex
          justify-center
          items-center
          gap-3
          "
          style={{
            background: "var(--primary-solid)",
          }}
        >
          {loading ? (
            <>
              <div
                className="
                w-5
                h-5
                rounded-full
                border-2
                border-white
                border-t-transparent
                animate-spin
                "
              />
              Sending...
            </>
          ) : (
            <>
              <HiOutlinePaperAirplane />
              Send Message
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MessageParentModal;
