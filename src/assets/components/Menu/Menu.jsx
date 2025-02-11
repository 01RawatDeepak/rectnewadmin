import React from "react";

export default function Menu() {
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i className="ti ti-menu-2 ti-md"></i>
          </a>
        </div>

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a
                className="nav-item nav-link search-toggler d-flex align-items-center px-0"
                href="#"
              >
                <i className="ti ti-search ti-md me-2 me-lg-4 ti-lg"></i>
                <span className="d-none d-md-inline-block text-muted fw-normal">
                  Search (Ctrl+/)
                </span>
              </a>
            </div>
          </div>

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item dropdown-language dropdown">
              <a
                className="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-language rounded-circle ti-md"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-language="en"
                    data-text-direction="ltr"
                  >
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-language="fr"
                    data-text-direction="ltr"
                  >
                    <span>French</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-language="ar"
                    data-text-direction="rtl"
                  >
                    <span>Arabic</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-language="de"
                    data-text-direction="ltr"
                  >
                    <span>German</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-style-switcher dropdown">
              <a
                className="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-md"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-theme="light"
                  >
                    <span className="align-middle">
                      <i className="ti ti-sun ti-md me-3"></i>Light
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-theme="dark"
                  >
                    <span className="align-middle">
                      <i className="ti ti-moon-stars ti-md me-3"></i>Dark
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-theme="system"
                  >
                    <span className="align-middle">
                      <i className="ti ti-device-desktop-analytics ti-md me-3"></i>
                      System
                    </span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown">
              <a
                className="nav-link btn btn-text-secondary btn-icon rounded-pill btn-icon dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i className="ti ti-layout-grid-add ti-md"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end p-0">
                <div className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h6 className="mb-0 me-auto">Shortcuts</h6>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add shortcuts"
                    >
                      <i className="ti ti-plus text-heading"></i>
                    </a>
                  </div>
                </div>
                <div className="dropdown-shortcuts-list scrollable-container">
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-calendar ti-26px text-heading"></i>
                      </span>
                      <a href="app-calendar.html" className="stretched-link">
                        Calendar
                      </a>
                      <small>Appointments</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-file-dollar ti-26px text-heading"></i>
                      </span>
                      <a href="app-invoice-list.html" className="stretched-link">
                        Invoice App
                      </a>
                      <small>Manage Accounts</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-user ti-26px text-heading"></i>
                      </span>
                      <a href="app-user-list.html" className="stretched-link">
                        User App
                      </a>
                      <small>Manage Users</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-users ti-26px text-heading"></i>
                      </span>
                      <a href="app-access-roles.html" className="stretched-link">
                        Role Management
                      </a>
                      <small>Permission</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-device-desktop-analytics ti-26px text-heading"></i>
                      </span>
                      <a href="index-2.html" className="stretched-link">
                        Dashboard
                      </a>
                      <small>User Dashboard</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-settings ti-26px text-heading"></i>
                      </span>
                      <a
                        href="pages-account-settings-account.html"
                        className="stretched-link"
                      >
                        Setting
                      </a>
                      <small>Account Settings</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-help ti-26px text-heading"></i>
                      </span>
                      <a href="pages-faq.html" className="stretched-link">
                        FAQs
                      </a>
                      <small>FAQs & Articles</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="ti ti-square ti-26px text-heading"></i>
                      </span>
                      <a href="modal-examples.html" className="stretched-link">
                        Modals
                      </a>
                      <small>Useful Popups</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
              <a
                className="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="position-relative">
                  <i className="ti ti-bell ti-md"></i>
                  <span className="badge rounded-pill bg-danger badge-dot badge-notifications border"></span>
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-0">
                <li className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h6 className="mb-0 me-auto">Notification</h6>
                    <div className="d-flex align-items-center h6 mb-0">
                      <span className="badge bg-label-primary me-2">8 New</span>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-text-secondary rounded-pill btn-icon dropdown-notifications-all"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark all as read"
                      >
                        <i className="ti ti-mail-opened text-heading"></i>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="../../assets/img/avatars/1.png"
                              alt
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="small mb-1">Congratulation Lettie 🎉</h6>
                          <small className="mb-1 d-block text-body">
                            Won the monthly best seller gold badge
                          </small>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-danger">
                              CF
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">Charles Franklin</h6>
                          <small className="mb-1 d-block text-body">
                            Accepted your connection
                          </small>
                          <small className="text-muted">12hr ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">New Message ✉️</h6>
                          <small className="mb-1 d-block text-body">
                            You have new message from Natalie
                          </small>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="ti ti-shopping-cart"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">
                            Whoo! You have new order 🛒
                          </h6>
                          <small className="mb-1 d-block text-body">
                            ACME Inc. made new order $1,154
                          </small>
                          <small className="text-muted">1 day ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="../../assets/img/avatars/9.png"
                              alt
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">
                            Application has been approved 🚀
                          </h6>
                          <small className="mb-1 d-block text-body">
                            Your ABC project application has been approved.
                          </small>
                          <small className="text-muted">2 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="ti ti-chart-pie"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">
                            Monthly report is generated
                          </h6>
                          <small className="mb-1 d-block text-body">
                            July monthly financial report is generated
                          </small>
                          <small className="text-muted">3 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">Send connection request</h6>
                          <small className="mb-1 d-block text-body">
                            Peter sent you connection request
                          </small>
                          <small className="text-muted">4 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">New message from Jane</h6>
                          <small className="mb-1 d-block text-body">
                            Your have new message from Jane
                          </small>
                          <small className="text-muted">5 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-warning">
                              <i className="ti ti-alert-triangle"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">CPU is running high</h6>
                          <small className="mb-1 d-block text-body">
                            CPU Utilization Percent is currently at 88.63%,
                          </small>
                          <small className="text-muted">5 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="ti ti-x"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="border-top">
                  <div className="d-grid p-4">
                    <a
                      className="btn btn-primary btn-sm d-flex"
                      href="#"
                    >
                      <small className="align-middle">View all notifications</small>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow p-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src="../../assets/img/avatars/1.png"
                    alt
                    className="rounded-circle"
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item mt-0"
                    href="pages-account-settings-account.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-2">
                        <div className="avatar avatar-online">
                          <img
                            src="../../assets/img/avatars/1.png"
                            alt
                            className="rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">John Doe</h6>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider my-1 mx-n2"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="pages-profile-user.html">
                    <i className="ti ti-user me-3 ti-md"></i>
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pages-account-settings-account.html"
                  >
                    <i className="ti ti-settings me-3 ti-md"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pages-account-settings-billing.html"
                  >
                    <span className="d-flex align-items-center align-middle">
                      <i className="flex-shrink-0 ti ti-file-dollar me-3 ti-md"></i>
                      <span className="flex-grow-1 align-middle">Billing</span>
                      <span className="flex-shrink-0 badge bg-danger d-flex align-items-center justify-content-center">
                        4
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider my-1 mx-n2"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="pages-pricing.html">
                    <i className="ti ti-currency-dollar me-3 ti-md"></i>
                    <span className="align-middle">Pricing</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages-faq.html">
                    <i className="ti ti-question-mark me-3 ti-md"></i>
                    <span className="align-middle">FAQ</span>
                  </a>
                </li>
                <li>
                  <div className="d-grid px-2 pt-2 pb-1">
                    <a
                      className="btn btn-sm btn-danger d-flex"
                      href="auth-login-cover.html"
                      target="_blank"
                    >
                      <small className="align-middle">Logout</small>
                      <i className="ti ti-logout ms-2 ti-14px"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-search-wrapper search-input-wrapper d-none">
          <input
            type="text"
            className="form-control search-input container-xxl border-0"
            placeholder="Search..."
            aria-label="Search..."
          />
          <i className="ti ti-x search-toggler cursor-pointer"></i>
        </div>
      </nav>
    </>
  );
}
