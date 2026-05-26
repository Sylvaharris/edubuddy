"use client";

import { useState } from "react";

import {
  HiOutlineDocument,
  HiOutlinePhoto,
  HiOutlineCloudArrowUp,
  HiOutlineTrash,
  HiOutlinePencilSquare,
  HiOutlineSparkles,
  HiOutlineXMark,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";

const SubjectMaterials = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [fileToDelete, setFileToDelete] = useState(null);

  /* ==========================
      OPEN EDITOR
  ========================== */

  const openEditor = (subject) => {
    setSelectedSubject(subject);

    setUploadedFiles(
      subject.materials?.map((item, index) => ({
        id: index,
        name: item,
        size: 0,
        type: "document",
        existing: true,
      })) || [],
    );
  };

  /* ==========================
      UPLOAD FILES
  ========================== */

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const formattedFiles = files.map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      size: file.size,
      type: file.type,
      existing: false,
    }));

    setUploadedFiles((prev) => [...prev, ...formattedFiles]);
  };

  /* ==========================
      DELETE FILE
  ========================== */

  const deleteFile = () => {
    setUploadedFiles((prev) =>
      prev.filter((file) => file.id !== fileToDelete.id),
    );

    setFileToDelete(null);
  };

  /* ==========================
      FORMAT SIZE
  ========================== */

  const formatSize = (size) => {
    if (!size) return "Existing file";

    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  };

  /* ==========================
      FILE ICON
  ========================== */

  const getIcon = (file) => {
    if (file.type?.includes("image")) {
      return <HiOutlinePhoto className="text-blue-500 text-xl" />;
    }

    return <HiOutlineDocument className="text-violet-500 text-xl" />;
  };

  return (
    <>
      {/* SUBJECT CARDS */}

      <div className="space-y-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="
              bg-white
              rounded-[30px]
              border
              border-gray-100
              p-7
              shadow-sm
              "
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-lg">{subject.name}</h2>

                <div className="flex gap-3 mt-1">
                  <span className="text-sm text-gray-500">{subject.class}</span>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs

                      ${
                        subject.status === "Published"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }
                      `}
                  >
                    {subject.status}
                  </span>
                </div>
              </div>

              <button
                onClick={() => openEditor(subject)}
                className="
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-gray-200
                  flex
                  gap-2
                  items-center
                  "
              >
                <HiOutlinePencilSquare />
                Manage
              </button>
            </div>

            <div
              className="
                mt-6
                p-5
                rounded-2xl
                bg-gray-50
                "
            >
              {subject.materials?.length > 0 ? (
                <div className="space-y-3">
                  {subject.materials.map((item) => (
                    <div
                      key={item}
                      className="
                          flex
                          items-center
                          gap-3
                          "
                    >
                      <HiOutlineDocument className="text-blue-500" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex gap-2 items-center text-gray-400">
                  <HiOutlineSparkles />
                  No materials uploaded
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}

      {selectedSubject && (
        <div
          className="
          fixed inset-0
          bg-black/20
          backdrop-blur-sm
          z-50
          flex
          items-center
          justify-center
          "
        >
          <div
            className="
            bg-white
            rounded-[30px]
            p-8
            w-full
            max-w-[850px]
            "
          >
            {/* HEADER */}

            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-2xl">Manage Materials</h2>

                <p className="text-gray-500">{selectedSubject.name}</p>
              </div>

              <button onClick={() => setSelectedSubject(null)}>
                <HiOutlineXMark className="text-2xl" />
              </button>
            </div>

            {/* UPLOAD */}

            <label
              className="
              mt-8
              block

              border-2
              border-dashed
              border-gray-300

              rounded-[28px]

              p-10

              text-center

              cursor-pointer

              hover:bg-gray-50
              transition-all
              "
            >
              <HiOutlineCloudArrowUp className="mx-auto text-5xl text-gray-400" />

              <h3 className="font-semibold mt-4">Upload files</h3>

              <p className="text-sm text-gray-500 mt-2">
                PDF, DOCX, PPT, PNG, JPG
              </p>

              <input
                type="file"
                multiple
                onChange={handleUpload}
                accept="
                .pdf,
                .doc,
                .docx,
                .ppt,
                .pptx,
                .png,
                .jpg,
                .jpeg
                "
                className="hidden"
              />
            </label>

            {/* FILES */}

            <div className="mt-8">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Files</h3>

                <span className="text-sm text-gray-400">
                  {uploadedFiles.length} files
                </span>
              </div>

              <div className="space-y-3">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="
                      p-4
                      rounded-2xl
                      bg-gray-50

                      flex
                      justify-between
                      items-center

                      hover:bg-gray-100
                      transition-all
                      "
                  >
                    <div className="flex gap-4">
                      {getIcon(file)}

                      <div>
                        <h4 className="font-medium">{file.name}</h4>

                        <p className="text-sm text-gray-400">
                          {formatSize(file.size)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setFileToDelete(file)}
                      className="
                        p-2
                        rounded-xl
                        hover:bg-red-50
                        text-red-500
                        "
                    >
                      <HiOutlineTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION */}

      {fileToDelete && (
        <div
          className="
          fixed
          inset-0
          bg-black/20
          z-[60]
          flex
          items-center
          justify-center
          "
        >
          <div
            className="
            bg-white
            rounded-[30px]
            p-8
            max-w-[450px]
            w-full
            "
          >
            <HiOutlineExclamationTriangle
              className="
              text-red-500
              text-5xl
              "
            />

            <h2 className="font-bold text-xl mt-4">Delete file?</h2>

            <p className="text-gray-500 mt-2">
              "{fileToDelete.name}" will be permanently removed.
            </p>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setFileToDelete(null)}
                className="
                flex-1
                border
                py-3
                rounded-xl
                "
              >
                Cancel
              </button>

              <button
                onClick={deleteFile}
                className="
                flex-1
                py-3
                rounded-xl
                bg-red-500
                text-white
                "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubjectMaterials;
