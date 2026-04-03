import {
  FaFolder,
  FaArchive,
  FaUserAlt,
  FaThumbsUp,
  FaEye,
  FaFire,
} from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { IoChatboxSharp, IoSend } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { FiSearch, FiPhone, FiThumbsUp, FiEye } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import {
  BsCheckAll,
  BsCheck,
  BsMicFill,
  BsPinAngleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  ImageIcon,
  ChevronUp,
  ChevronDown,
  VideoIcon,
  FileIcon,
  MusicIcon,
  LinkIcon,
  MicIcon,
} from "lucide-react";
import Nat1 from "./assets/nat1.jpg";
import Nat2 from "./assets/nat2.jpg";
import Nat3 from "./assets/nat3.jpg";
import Nat4 from "./assets/nat4.jpg";

import "./chat.css";
export const Chat = () => {
  const members = [
    {
      name: "Tanisha Combs",
      avatar: "https://i.pravatar.cc/36?img=47",
      isAdmin: true,
    },
    {
      name: "Alex Hunt",
      avatar: "https://i.pravatar.cc/36?img=11",
      isAdmin: false,
    },
    {
      name: "Jasmin Lowery",
      avatar: "https://i.pravatar.cc/36?img=45",
      isAdmin: false,
    },
    {
      name: "Max Padilla",
      avatar: "https://i.pravatar.cc/36?img=15",
      isAdmin: false,
    },
    {
      name: "Jessie Rollins",
      avatar: "https://i.pravatar.cc/36?img=49",
      isAdmin: false,
    },
    {
      name: "Lukas Mcgowan",
      avatar: "https://i.pravatar.cc/36?img=53",
      isAdmin: false,
    },
  ];

  const chats = [
    {
      id: 1,
      name: "Design chat",
      initials: "DC",
      preview: "Jessie Rollins sent...",
      time: "4m",
      badge: 7,
      badgeColor: "blue",
      pinned: true,
      active: true,
    },
    {
      id: 2,
      name: "Osman Campos",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      preview: "Hey! We are read...",
      time: "20m",
      pinned: true,
      isYou: true,
      ticks: "double",
    },
    {
      id: 3,
      name: "Jayden Church",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      preview: "I prepared some varia...",
      time: "1h",
      pinned: true,
    },
    {
      id: 4,
      name: "Jacob Mcleod",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      preview: "And send me the proto...",
      time: "10m",
      badge: 6,
    },
    {
      id: 5,
      name: "Jasmin Lowery",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      preview: "Ok! Let's discuss it on th...",
      time: "20m",
      isYou: true,
      ticks: "double",
    },
    {
      id: 6,
      name: "Zaid Myers",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      preview: "Hey! We are ready to in...",
      time: "45m",
      isYou: true,
      ticks: "single",
    },
    {
      id: 7,
      name: "Anthony Cordanes",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      preview: "What do you think?",
      time: "1d",
    },
    {
      id: 8,
      name: "Conner Garcia",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      preview: "You think it could be Perfect!",
      time: "2d",
      isYou: true,
      ticks: "double",
    },
    {
      id: 9,
      name: "Vanessa Cox",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      preview: null,
      time: "2d",
      voice: true,
      ticks: "double",
    },
  ];
  return (
    <div className="flex h-screen bg-black ">
      <div className="flex-none w-16 h-screen bg-black text-gray-500 gap-9 ">
        <div className="flex flex-col justify-between h-full px-2 ">
          {/* Top items */}
          <div>
            <div className="pt-3 navSec">
              <FaCrown className="size-6" />
            </div>
            <div className="pt-7 space-y-5">
              <div className="navSec">
                <div>
                  <IoChatboxSharp />
                </div>
                <div className="text-xs">All chats</div>
              </div>
              <div className="navSec">
                <div>
                  <FaFolder />
                </div>
                <div className="text-xs">Work</div>
              </div>
              <div className="navSec">
                <div>
                  <FaFolder />
                </div>
                <div className="text-xs">Friends</div>
              </div>
              <div className="navSec">
                <div>
                  <FaFolder />
                </div>
                <div className="text-xs">News</div>
              </div>
              <div className="navSec">
                <div>
                  <FaArchive />
                </div>
                <div className="text-xs ">Archive Chats</div>
              </div>
              <hr className="border-gray-500 " />
              <div className="navSec">
                <div>
                  <FaUserAlt />
                </div>
                <div className="text-xs">Profile</div>
              </div>
              <div className="navSec">
                <div>
                  <MdModeEdit />
                </div>
                <div className="text-xs">Edit</div>
              </div>
            </div>
          </div>

          {/* Bottom item */}
          <div className="py-5 navSec">
            <div className="">
              <TbLogout2 />
            </div>
            <div className="text-xs">Logout</div>
          </div>
        </div>
      </div>

      {/* Column 2 - Chat List (fixed width) */}

      <div className="flex-none  bg-white  my-1 chat-container rounded-l-3xl no-scrollbar">
        {/* Search Bar */}
        <div className="search-bar">
          <FiSearch size={16} className="search-icon" />
          <span className="search-placeholder">Search</span>
        </div>

        {/* Chat List */}
        <div className="chat-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${chat.active ? "active" : ""}`}
            >
              {/* Avatar */}
              <div className="avatar-wrap">
                {chat.initials ? (
                  <div className="avatar-initials">{chat.initials}</div>
                ) : (
                  <img src={chat.avatar} alt={chat.name} className="avatar" />
                )}
                {chat.badge && (
                  <span
                    className={`badge ${chat.badgeColor === "blue" ? "badge-blue" : "badge-red"}`}
                  >
                    {chat.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="chat-info">
                <p className="chat-name">{chat.name}</p>
                <div
                  className={`chat-preview ${chat.isYou ? "preview-you" : ""}`}
                >
                  {chat.isYou && chat.ticks === "double" && (
                    <BsCheckAll className="tick-icon" />
                  )}
                  {chat.isYou && chat.ticks === "single" && (
                    <BsCheck className="tick-icon tick-grey" />
                  )}
                  {chat.voice ? (
                    <span className="voice-pill">
                      <BsMicFill size={10} /> Voice message
                    </span>
                  ) : (
                    <span>{chat.preview}</span>
                  )}
                </div>
              </div>

              {/* Meta */}
              <div className="chat-meta">
                <span className="chat-time">{chat.time}</span>
                {chat.pinned && <BsPinAngleFill className="pin-icon" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 3 - Main Chat (grows to fill) */}
      <div className="flex-1 bg-gray-50 my-1 rounded-r-3xl flex flex-col">
        {/* Header - Sticky Top */}
        <div className="flex justify-between pt-4 ps-1 bg-gray-50 rounded-tr-3xl sticky top-0 z-10">
          <div>
            <div className="text-3xl font-semibold">Design chat</div>
            <div className="text-gray-500 text-sm">23 members, 10 online</div>
          </div>
          <div className="flex gap-3 text-gray-500 pt-3">
            <div>
              <FiSearch size={25} />
            </div>
            <div>
              <FiPhone size={25} />
            </div>
            <div>
              <BsThreeDotsVertical size={25} />
            </div>
          </div>
        </div>

        {/* Scrollable Messages Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar  px-4">
          {/* messages go here */}
          <div className="w-full py-4">
            <div className=" rounded-2xl   w-full">
              {/* Header */}

              {/* Avatar + Message */}
              <div className="flex items-end gap-1">
                {/* Avatar */}
                <img
                  src={"https://randomuser.me/api/portraits/women/21.jpg"}
                  alt="Jasmin Lowery"
                  className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
                />

                {/* Message bubble */}
                <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                  <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                    Jasmin Lowery
                  </p>
                  <p className="text-[13.5px] leading-snug text-slate-600">
                    I added new flows to our design system.
                    <br />
                    Now you can use them for your projects!
                  </p>
                  <div className="flex justify-between text-slate-500 text-xs pt-1">
                    <div className="flex items-center gap-1">
                      <FaThumbsUp /> 4
                    </div>
                    <div className="flex gap-1">
                      <div className="flex items-center">
                        <FaEye /> 23
                      </div>
                      <div>09:20 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  ps-12">
            <div className=" rounded-2xl   w-full">
              {/* Header */}

              {/* Avatar + Message */}
              <div className="flex items-end gap-1">
                {/* Avatar */}
                {/* <img
                  src={Nat1}
                  alt="Jasmin Lowery"
                  className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
                /> */}

                {/* Message bubble */}
                <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                  <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                    Alex Hunt
                  </p>
                  <p className="text-[13.5px] leading-snug text-slate-600">
                    Hey Guys! Important News!
                  </p>
                  <div className="flex justify-end text-slate-500 text-xs pt-1">
                    <div className="flex gap-1">
                      <div className="flex items-center">
                        <FaEye /> 23
                      </div>
                      <div>09:20 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-2">
            <div className=" rounded-2xl   w-full">
              {/* Header */}

              {/* Avatar + Message */}
              <div className="flex items-end gap-1">
                {/* Avatar */}
                <img
                  src={"https://i.pravatar.cc/150?img=11"}
                  alt="Jasmin Lowery"
                  className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
                />

                {/* Message bubble */}
                <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                  <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                    Alex Hunt
                  </p>
                  <p className="text-[13.5px] leading-snug text-slate-600">
                    Our intern @jchurch has successfully completed his <br />
                    probability period and is now part of our team!
                  </p>

                  <div className="flex justify-between text-slate-500 text-xs pt-1">
                    <div className="flex items-center gap-1">
                      <FaFire /> 4
                    </div>
                    <div className="flex gap-1">
                      <div className="flex items-center">
                        <FaEye /> 23
                      </div>
                      <div>09:20 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-4 ps-30">
            <div className=" rounded-2xl   w-full">
              {/* Header */}

              {/* Avatar + Message */}
              <div className="flex items-end gap-1">
                {/* Avatar */}

                {/* Message bubble */}
                <div className="bg-violet-500 border border-slate-100 rounded-2xl rounded-br-sm px-3 py-3 w-fit">
                  <p className="text-[13.5px] leading-snug text-white">
                    Jaden, my congratulations! I will be glad to work with you
                    on a new project
                  </p>
                  <div className="flex justify-end text-white text-xs pt-1">
                    <div className="flex gap-1">
                      <div className="flex items-center">
                        <FaEye /> 23
                      </div>
                      <div>09:20 </div>
                    </div>
                  </div>
                </div>
                <img
                  src={"https://i.pravatar.cc/150?img=47"}
                  alt="Jasmin Lowery"
                  className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Input Bar - Sticky Bottom */}
        <div className="sticky bottom-0 z-10 bg-gray-50 rounded-br-3xl p-4">
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 shadow-sm">
            <button className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
              <GrAttachment size={18} />
            </button>
            <input
              type="text"
              placeholder="Your message"
              className="flex-1 bg-transparent text-sm text-gray-500 placeholder-gray-400 outline-none"
            />
            <button className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
              <BsMicFill size={18} />
            </button>
            <button className="text-gray-400 hover:text-blue-500 transition-colors flex-shrink-0">
              <IoSend size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Column 4 - Group Info Panel (fixed width) */}

      <div className=" space-y-2  w-72 bg-[#000] overflow-y-auto no-scrollbar px-2 py-1">
        {/* Group Info Section */}
        <div className="bg-[#fff] border border-gray-200 rounded-3xl px-1">
          <div className="flex justify-between items-center mb-4 pt-4">
            <span className="text-base font-bold text-gray-900 pl-3 ">
              Group Info
            </span>
            <button className="text-gray-500 hover:text-gray-800 text-sm pr-2">
              ✕
            </button>
          </div>

          <p className="text-xs font-semibold text-gray-800 mb-2 px-4">Files</p>

          {/* Photos */}
          <div className="flex justify-between items-center mb-2 px-4">
            <div className="flex items-center gap-2 ">
              <ImageIcon className="w-4 h-4 text-black" />
              <span className="text-sm text-black">265 photos</span>
            </div>
            <ChevronUp className="w-4 h-4 text-black " />
          </div>

          <div className="flex flex-nowrap gap-2 mb-3 overflow-x-auto no-scrollbar px-4">
            <img src={Nat1} className="w-24 h-16 rounded-lg object-cover" />
            <img src={Nat2} className="w-24 h-16 rounded-lg object-cover" />
            <img src={Nat3} className="w-24 h-16 rounded-lg object-cover" />
            <img src={Nat4} className="w-24 h-16 rounded-lg object-cover" />
          </div>

          {/* File rows */}
          {[
            { icon: <VideoIcon size={19} />, label: "13 videos" },
            { icon: <FileIcon size={19} />, label: "378 files" },
            { icon: <MusicIcon size={19} />, label: "21 audio files" },
            { icon: <LinkIcon size={19} />, label: "45 shared links" },
            { icon: <MicIcon size={19} />, label: "2589 voice messages" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex justify-between items-center py-2.5 border-t border-gray-100 px-4"
            >
              <div className="flex items-center gap-4 ">
                <span className="text-black w-4 h-4 groupicon text-black">
                  {icon}
                </span>
                <span className="text-sm text-black">{label}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-black " />
            </div>
          ))}
        </div>

        {/* Members Section */}
        <div className="bg-indigo-50 p-5 border border-gray-200 rounded-3xl ">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-gray-900">23 members</span>
            <button className="text-gray-500 hover:text-gray-700 text-sm ">
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {members.map((m) => (
              <div key={m.name} className="flex items-center gap-2.5">
                <img
                  src={m.avatar}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="text-sm text-gray-800 flex-1">{m.name}</span>
                {m.isAdmin && (
                  <span className="text-xs text-indigo-400 font-medium">
                    admin
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
