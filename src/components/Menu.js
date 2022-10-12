import React from 'react'

export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="/" className="brand-link">
                <img src="dist/img/ewaste128x128.png" alt="E-Waste Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">E-Waste</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Admin Kasep</a>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
                        <li className="nav-item menu-open">
                            <a href="#" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="./index.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Dashboard v1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./index2.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Dashboard v2</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./index3.html" className="nav-link active">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Dashboard v3</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>
                                    Manage
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Admin</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Courier</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>User</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-scroll" />
                                <p>
                                    Trancation
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/UI/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>General</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/icons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Icons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/buttons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Buttons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/sliders.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Sliders</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/modals.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Modals &amp; Alerts</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/navbar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Navbar &amp; Tabs</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/timeline.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Timeline</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/ribbons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Ribbons</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Waste
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>General Elements</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/advanced.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Advanced Elements</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/editors.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Editors</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/validation.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Validation</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-truck" />
                                <p>
                                    Pickup
                                    <i className="fas fa-angle-left right" />
                                    <span className="badge badge-info right">6</span>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/layout/top-nav.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Top Navigation</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Top Navigation + Sidebar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/layout/boxed.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Boxed</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Sidebar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Navbar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/layout/fixed-footer.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Footer</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Collapsed Sidebar</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-newspaper" />
                                <p>
                                    News
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/tables/simple.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Simple Tables</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/data.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>DataTables</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/jsgrid.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>jsGrid</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}
