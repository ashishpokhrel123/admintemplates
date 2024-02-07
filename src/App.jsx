import React, { useState } from "react";
import { LayoutDashboard, ChevronDown, BellRing, AlignJustify } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";

function App() {
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isApplicationDropdownOpen, setIsApplicationDropdownOpen] =
    useState(false);
  const [isSuperAdminDropdownOpen, setIsSuperAdminDropdownOpen] =
    useState(false);
  const [isInventoryDropdownOpen, setIsInventoryDropdownOpen] = useState(false);
  const [isSignatureDropdownOpen, setIsSignatureDropdownOpen] = useState(false);

  const handleDropdownClick = (dropdownState, setDropdownState) => {
    setDropdownState(!dropdownState);
  };

  return (
    <div>
    <nav className="flex items-center sticky top-0 z-10 justify-between flex-wrap bg-white p-6 border-2 border-black-500">
        <div className="flex items-center flex-shrink-0 text-black">
          <span className="font-semibold text-xl tracking-tight mr-12">
            Account Software
          </span>
          <AlignJustify className="mr-4" />
          <div>
            <input
              className="border border-gray-400 rounded py-1 px-3"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        
        <div className="block lg:hidden">
         <div className="ml-4">
            <input
              className="border border-gray-400 rounded py-1 px-3"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="w-full block flex-end lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <button className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
              <BellRing />
            </button>
          </div>
          <div>
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="avatar.jpg"
              alt="Avatar"
            />
          </div>
          
        </div>
      </nav>

      <div className="flex">
        <Sidebar>
          <span className="text-sm text-muted-foreground">Admin</span>
          <div className="flex">
            <SidebarItem
              icon={<LayoutDashboard className="text-sm" size={20} />}
              text="Dashboard"
              dropdown={true}
              isOpen={isDashboardDropdownOpen}
              onClick={() =>
                handleDropdownClick(
                  isDashboardDropdownOpen,
                  setIsDashboardDropdownOpen
                )
              }
              className="text-sm text-medium"
            />
            <ChevronDown
              onClick={() =>
                handleDropdownClick(
                  isDashboardDropdownOpen,
                  setIsDashboardDropdownOpen
                )
              }
              height={20}
              className={` mt-3 ${
                isDashboardDropdownOpen ? "chevron-open" : "chevron-closed"
              }`}
            />
          </div>

          {isDashboardDropdownOpen && (
            <SidebarItem
              icon={<LayoutDashboard size={20} className="mx-4" />}
              text="Admin Dashboard"
              className="text-sm font-medium"
            />
          )}
          <div className="flex">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Application"
              dropdown={true}
              isOpen={isApplicationDropdownOpen}
              onClick={() =>
                handleDropdownClick(
                  isApplicationDropdownOpen,
                  setIsApplicationDropdownOpen
                )
              }
              className="text-sm font-medium"
            />
            <ChevronDown
              onClick={() =>
                handleDropdownClick(
                  isApplicationDropdownOpen,
                  setIsApplicationDropdownOpen
                )
              }
              height={20}
              className={` mt-3 ${
                isApplicationDropdownOpen ? "chevron-open" : "chevron-closed"
              }`}
            />
          </div>

          {isApplicationDropdownOpen && (
            <SidebarItem
              icon={<LayoutDashboard size={20} className="mx-4" />}
              text="Admin Dashboard"
              className="text-sm font-medium"
            />
          )}
          <div className="flex">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Super Admin"
              dropdown={true}
              isOpen={isSuperAdminDropdownOpen}
              onClick={() =>
                handleDropdownClick(
                  isSuperAdminDropdownOpen,
                  setIsSuperAdminDropdownOpen
                )
              }
              className="text-sm font-medium"
            />
            <ChevronDown
              onClick={() =>
                handleDropdownClick(
                  isSuperAdminDropdownOpen,
                  setIsSuperAdminDropdownOpen
                )
              }
              height={20}
              className={` mt-3 ${
                isSuperAdminDropdownOpen ? "chevron-open" : "chevron-closed"
              }`}
            />
          </div>

          {isSuperAdminDropdownOpen && (
            <SidebarItem
              icon={<LayoutDashboard size={20} className="mx-4" />}
              text="Admin Dashboard"
              className="text-sm font-medium"
            />
          )}

          <span className="text-sm text-muted-foreground">Customers</span>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Customers"
            dropdown={true}
            isOpen={isSuperAdminDropdownOpen}
            onClick={() =>
              handleDropdownClick(
                isSuperAdminDropdownOpen,
                setIsSuperAdminDropdownOpen
              )
            }
            className="text-sm font-medium"
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Customer Details"
            dropdown={true}
            isOpen={isSuperAdminDropdownOpen}
            onClick={() =>
              handleDropdownClick(
                isSuperAdminDropdownOpen,
                setIsSuperAdminDropdownOpen
              )
            }
            className="text-sm font-medium"
          />

          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Vendors"
            dropdown={true}
            isOpen={isSuperAdminDropdownOpen}
            onClick={() =>
              handleDropdownClick(
                isSuperAdminDropdownOpen,
                setIsSuperAdminDropdownOpen
              )
            }
            className="text-sm font-medium"
          />

          <span className="text-sm text-muted-foreground">Inventory</span>
          <div className="flex">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Product & Services"
              dropdown={true}
              isOpen={isInventoryDropdownOpen}
              onClick={() =>
                handleDropdownClick(
                  isInventoryDropdownOpen,
                  setIsInventoryDropdownOpen
                )
              }
              className="text-sm font-medium"
            />
            <ChevronDown
              onClick={() =>
                handleDropdownClick(
                  isInventoryDropdownOpen,
                  setIsInventoryDropdownOpen
                )
              }
              height={20}
              className={` mt-3 ${
                isInventoryDropdownOpen ? "chevron-open" : "chevron-closed"
              }`}
            />
          </div>

          {isInventoryDropdownOpen && (
            <>
              <SidebarItem
                icon={<LayoutDashboard size={20} className="mx-4" />}
                text="Product Lists "
                className="text-sm font-medium"
              />
              <SidebarItem
                icon={<LayoutDashboard size={20} className="mx-4" />}
                text="Category"
                className="text-sm font-medium"
              />
              <SidebarItem
                icon={<LayoutDashboard size={20} className="mx-4" />}
                text="Units"
                className="text-sm font-medium"
              />
            </>
          )}

          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Inventory"
            dropdown={true}
            isOpen={isInventoryDropdownOpen}
            onClick={() =>
              handleDropdownClick(
                isInventoryDropdownOpen,
                setIsInventoryDropdownOpen
              )
            }
            className="text-sm font-medium"
          />

          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Vendors"
            dropdown={true}
            isOpen={isInventoryDropdownOpen}
            onClick={() =>
              handleDropdownClick(
                isInventoryDropdownOpen,
                setIsInventoryDropdownOpen
              )
            }
            className="text-sm font-medium"
          />

          {isInventoryDropdownOpen && (
            <SidebarItem
              icon={<LayoutDashboard size={20} className="mx-4" />}
              text="Admin Dashboard"
              className="text-sm font-medium"
            />
          )}

          <span className="text-sm text-muted-foreground">Signature</span>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="List of Signature"
            dropdown={true}
            isOpen={isSignatureDropdownOpen}
            onClick={() =>
              handleDropdownClick(
                isSignatureDropdownOpen,
                setIsSignatureDropdownOpen
              )
            }
            className="text-sm font-medium"
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Signature Invoice"
            dropdown={true}
            isOpen={isSignatureDropdownOpen}
            onClick={() =>
              handleDropdownClick(
                isSignatureDropdownOpen,
                setIsSignatureDropdownOpen
              )
            }
            className="text-sm font-medium"
          />
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
