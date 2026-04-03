import {
  FaFolder,
  FaArchive,
  FaUserAlt,
  FaThumbsUp,
  FaEye,
  FaFire,
} from "react-icons/fa";
import { GiMoebiusTriangle } from "react-icons/gi";
import { FaCrown } from "react-icons/fa6";
import { IoChatboxSharp, IoSend } from "react-icons/io5";
import { MdModeEdit, MdChatBubble } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { FiSearch, FiPhone, FiThumbsUp, FiEye } from "react-icons/fi";
import { useState } from "react";
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

import "./pract.css";

export const Pract = () => {
  const [navOpen, setNavOpen] = useState(false);
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
    <div className="flex h-screen bg-black overflow-hidden">
      {/* ── Overlay (sm only) ── */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* ── Column 1 — Navbar ── */}
      <div
        className={`
          fixed sm:relative z-50 sm:z-auto
          flex-none w-20 h-screen bg-black text-gray-500
          transition-transform duration-300 ease-in-out
          ${navOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
      >
        <div className="flex flex-col h-full px-2 py-4 overflow-y-auto  md:pt-10 lg:pt-0">
          {/* Top - Logo */}
          <div className="flex justify-center pb-4">
            <GiMoebiusTriangle className="text-white size-10 md:size-8 lg:size-10 mt-8" />
          </div>

          {/* Middle - Nav Items */}
          <div className="flex-1 flex flex-col justify-center gap-5 md:gap-8 lg:gap-5">
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <IoChatboxSharp className="size-8 md:size-7 lg:size-7" />
              <div className="text-[17px] md:text-[16px] text-center lg:text-[12px]  ">
                All chats
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <FaFolder className="size-8 md:size-7 lg:size-7" />
              <div className="text-[17px] md:text-[16px] lg:text-[12px] text-center ">
                Work
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <FaFolder className="size-8 md:size-7 lg:size-7" />
              <div className="text-[17px] md:text-[16px] lg:text-[12px] text-center ">
                Friends
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <FaFolder className="size-8 md:size-7 lg:size-7" />
              <div className="text-[17px] md:text-[16px] lg:text-[12px] text-center ">
                News
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <FaArchive className="size-8 md:size-7 lg:size-7" />
              <div className="text-[17px] md:text-[16px] lg:text-[12px] text-center ">
                Archive chats
              </div>
            </div>

            <hr className="border-gray-700 my-1" />

            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <FaUserAlt className="size-8 md:size-7 lg:size-7" />
              <div className="text-[17px] md:text-[16px] lg:text-[12px] text-center ">
                Profile
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <MdModeEdit className="size-8 md:size-7 lg:size-7" />
              <div className="text-[19px]  md:text-[18px] lg:text-[12px] text-center ">
                Edit
              </div>
            </div>
          </div>

          {/* Bottom - Logout */}
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
            <TbLogout2 className="size-8 md:size-7 lg:size-7" />
            <div className="text-[17px]  md:text-[16px] lg:text-[12px] text-center ">
              Logout
            </div>
          </div>
        </div>
      </div>

      {/* ── Column 2 — Chat List ── */}
      <div className="w-full md:w-60 lg:w-64 xl:w-72 flex-shrink-0 bg-white my-2 rounded-none md:rounded-l-3xl md:rounded-r-none overflow-y-auto no-scrollbar">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 bg-white px-3 pt-3 pb-2">
          <div className="flex items-center gap-2">
            {/* Three-dots toggle — sm only */}
            <button
              className="sm:hidden flex-shrink-0 text-gray-600 hover:text-gray-900 transition-colors p-1"
              onClick={() => setNavOpen(true)}
              aria-label="Open menu"
            >
              <BsThreeDotsVertical size={18} />
            </button>

            <div className="flex items-center gap-2 bg-gray-100 rounded-full  px-4 py-2 w-full ">
              <FiSearch size={16} className="text-gray-400 shrink-0" />
              <span className="text-gray-400 text-sm truncate">Search</span>
            </div>
          </div>
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

      {/* Column 3 - Main Chat (hidden on sm, visible on md+) */}
      <div className="hidden md:flex flex-1 min-w-0 bg-gray-50 my-2 mr-1 rounded-r-3xl flex-col">
        {/* Header */}
        <div className="flex justify-between pt-4 ps-3 bg-gray-50 rounded-tr-3xl lg:rounded-tr-3xl sticky top-0 z-10">
          <div>
            <div className="text-2xl lg:text-3xl font-semibold ">
              Design chat
            </div>
            <div className="text-gray-500 text-sm">23 members, 10 online</div>
          </div>
          <div className="flex gap-3 text-gray-500 pt-3 pr-3">
            <FiSearch size={22} />
            <FiPhone size={22} />
            <BsThreeDotsVertical size={22} />
          </div>
        </div>

        {/* Scrollable Messages Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-4">
          {/* Message 1 - Jasmin */}
          <div className="w-full py-4">
            <div className="flex items-end gap-1">
              <img
                src={"https://randomuser.me/api/portraits/women/21.jpg"}
                alt="Jasmin Lowery"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
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
                    <div>09:20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 2 - Alex (continuation, no avatar) */}
          <div className="w-full ps-12">
            <div className="flex items-end gap-1">
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
                    <div>09:21</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 3 - Alex with avatar */}
          <div className="w-full pt-2">
            <div className="flex items-end gap-1">
              <img
                src={"https://i.pravatar.cc/150?img=11"}
                alt="Alex Hunt"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
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
                    <div>09:22</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 4 - Own message */}
          <div className="w-full pt-4 flex justify-end">
            <div className="flex items-end gap-1">
              <div className="bg-violet-500 border border-slate-100 rounded-2xl rounded-br-sm px-3 py-3 w-fit">
                <p className="text-[13.5px] leading-snug text-white">
                  Jaden, my congratulations! I will be glad to work with you on
                  a new project
                </p>
                <div className="flex justify-end text-white text-xs pt-1">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 23
                    </div>
                    <div>09:23</div>
                  </div>
                </div>
              </div>
              <img
                src={"https://i.pravatar.cc/150?img=47"}
                alt="You"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
            </div>
          </div>

          {/* Message 5 - Jasmin reply */}
          <div className="w-full pt-4">
            <div className="flex items-end gap-1">
              <img
                src={"https://randomuser.me/api/portraits/women/21.jpg"}
                alt="Jasmin Lowery"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
              <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                  Jasmin Lowery
                </p>
                <p className="text-[13.5px] leading-snug text-slate-600">
                  That's amazing news! Welcome to the team @jchurch 🎉
                </p>
                <div className="flex justify-between text-slate-500 text-xs pt-1">
                  <div className="flex items-center gap-1">
                    <FaThumbsUp /> 6
                  </div>
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 19
                    </div>
                    <div>09:25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 6 - Jasmin continuation */}
          <div className="w-full pt-2 ps-12">
            <div className="flex items-end gap-1">
              <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                  Jasmin Lowery
                </p>
                <p className="text-[13.5px] leading-snug text-slate-600">
                  Also, I updated the color tokens in the design file.
                  <br />
                  Please sync before starting new screens.
                </p>
                <div className="flex justify-end text-slate-500 text-xs pt-1">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 17
                    </div>
                    <div>09:26</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 7 - Alex Hunt */}
          <div className="w-full pt-4">
            <div className="flex items-end gap-1">
              <img
                src={"https://i.pravatar.cc/150?img=11"}
                alt="Alex Hunt"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
              <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                  Alex Hunt
                </p>
                <p className="text-[13.5px] leading-snug text-slate-600">
                  Can everyone review the prototype by EOD?
                  <br />
                  We have a client call tomorrow at 10am.
                </p>
                <div className="flex justify-between text-slate-500 text-xs pt-1">
                  <div className="flex items-center gap-1">
                    <FaFire /> 2
                  </div>
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 21
                    </div>
                    <div>09:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 8 - Own reply */}
          <div className="w-full pt-4 flex justify-end">
            <div className="flex items-end gap-1">
              <div className="bg-violet-500 border border-slate-100 rounded-2xl rounded-br-sm px-3 py-3 w-fit">
                <p className="text-[13.5px] leading-snug text-white">
                  Sure! I'll check it and leave comments before 5pm.
                </p>
                <div className="flex justify-end text-white text-xs pt-1">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 18
                    </div>
                    <div>09:32</div>
                  </div>
                </div>
              </div>
              <img
                src={"https://i.pravatar.cc/150?img=47"}
                alt="You"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
            </div>
          </div>

          {/* Message 9 - Jasmin */}
          <div className="w-full pt-4">
            <div className="flex items-end gap-1">
              <img
                src={"https://randomuser.me/api/portraits/women/21.jpg"}
                alt="Jasmin Lowery"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
              <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                  Jasmin Lowery
                </p>
                <p className="text-[13.5px] leading-snug text-slate-600">
                  I shared the Figma link in the thread below.
                  <br />
                  Make sure you have edit access!
                </p>
                <div className="flex justify-between text-slate-500 text-xs pt-1">
                  <div className="flex items-center gap-1">
                    <FaThumbsUp /> 3
                  </div>
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 20
                    </div>
                    <div>09:35</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 10 - Alex continuation */}
          <div className="w-full pt-2 ps-12">
            <div className="flex items-end gap-1">
              <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                  Alex Hunt
                </p>
                <p className="text-[13.5px] leading-snug text-slate-600">
                  Thanks Jasmin. @everyone please drop a ✅ once reviewed.
                </p>
                <div className="flex justify-end text-slate-500 text-xs pt-1">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 22
                    </div>
                    <div>09:36</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 11 - Own message */}
          <div className="w-full pt-4 flex justify-end">
            <div className="flex items-end gap-1">
              <div className="bg-violet-500 border border-slate-100 rounded-2xl rounded-br-sm px-3 py-3 w-fit">
                <p className="text-[13.5px] leading-snug text-white">
                  ✅ Done! Left a few comments on the onboarding flow.
                </p>
                <div className="flex justify-end text-white text-xs pt-1">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 15
                    </div>
                    <div>09:50</div>
                  </div>
                </div>
              </div>
              <img
                src={"https://i.pravatar.cc/150?img=47"}
                alt="You"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
            </div>
          </div>

          {/* Message 12 - Jasmin */}
          <div className="w-full pt-4">
            <div className="flex items-end gap-1">
              <img
                src={"https://randomuser.me/api/portraits/women/21.jpg"}
                alt="Jasmin Lowery"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
              <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                  Jasmin Lowery
                </p>
                <p className="text-[13.5px] leading-snug text-slate-600">
                  Great feedback! I'll address them tonight.
                  <br />
                  The new component library is almost ready too.
                </p>
                <div className="flex justify-between text-slate-500 text-xs pt-1">
                  <div className="flex items-center gap-1">
                    <FaThumbsUp /> 5
                  </div>
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 16
                    </div>
                    <div>09:55</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 13 - Alex */}
          <div className="w-full pt-4">
            <div className="flex items-end gap-1">
              <img
                src={"https://i.pravatar.cc/150?img=11"}
                alt="Alex Hunt"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
              <div className="bg-slate-200 border border-slate-100 rounded-2xl rounded-tl-sm px-3 py-3 w-fit">
                <p className="text-[13px] font-semibold text-violet-900 mb-2 tracking-wide">
                  Alex Hunt
                </p>
                <p className="text-[13.5px] leading-snug text-slate-600">
                  Perfect. Let's sync at 9am tomorrow before the call.
                </p>
                <div className="flex justify-end text-slate-500 text-xs pt-1">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 20
                    </div>
                    <div>10:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 14 - Own */}
          <div className="w-full pt-4 pb-2 flex justify-end">
            <div className="flex items-end gap-1">
              <div className="bg-violet-500 border border-slate-100 rounded-2xl rounded-br-sm px-3 py-3 w-fit">
                <p className="text-[13.5px] leading-snug text-white">
                  Sounds good. See you all at 9! 👍
                </p>
                <div className="flex justify-end text-white text-xs pt-1">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <FaEye /> 12
                    </div>
                    <div>10:02</div>
                  </div>
                </div>
              </div>
              <img
                src={"https://i.pravatar.cc/150?img=47"}
                alt="You"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border-2 border-rose-200"
              />
            </div>
          </div>
        </div>

        {/* Input Bar */}
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

      {/* Column 4 - Group Info Panel (hidden on sm & md, visible on lg+) */}
      <div className="hidden lg:block space-y-2 w-72 bg-black overflow-y-auto no-scrollbar px-2 py-2">
        {/* Group Info Section */}
        <div className="bg-white border border-gray-200 rounded-3xl px-1">
          <div className="flex justify-between items-center mb-4 pt-4">
            <span className="text-base font-bold text-gray-900 pl-3">
              Group Info
            </span>
            <button className="text-gray-500 hover:text-gray-800 text-sm pr-2">
              ✕
            </button>
          </div>

          <p className="text-xs font-semibold text-gray-800 mb-2 px-4">Files</p>

          <div className="flex justify-between items-center mb-2 px-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-black" />
              <span className="text-sm text-black">265 photos</span>
            </div>
            <ChevronUp className="w-4 h-4 text-black" />
          </div>

          <div className="flex flex-nowrap gap-2 mb-3 overflow-x-auto no-scrollbar px-4">
            <img src={Nat1} className="w-24 h-16 rounded-lg object-cover" />
            <img src={Nat2} className="w-24 h-16 rounded-lg object-cover" />
            <img src={Nat3} className="w-24 h-16 rounded-lg object-cover" />
            <img src={Nat4} className="w-24 h-16 rounded-lg object-cover" />
          </div>

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
              <div className="flex items-center gap-4">
                <span className="text-black w-4 h-4">{icon}</span>
                <span className="text-sm text-black">{label}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-black" />
            </div>
          ))}
        </div>

        {/* Members Section */}
        <div className=" p-5 border border-gray-200 rounded-3xl memberSection">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-gray-900">23 members</span>
            <button className="text-gray-500 hover:text-gray-700 text-sm">
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {members.map((m) => (
              <div key={m.name} className="flex items-center gap-2.5">
                <img
                  src={m.avatar}
                  className="w-11 h-13 rounded-xl object-cover"
                />
                <span className="text-sm font-bold text-gray-900 flex-1">
                  {m.name}
                </span>
                {m.isAdmin && (
                  <span className="text-xs text-slate-400 font-medium">
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
