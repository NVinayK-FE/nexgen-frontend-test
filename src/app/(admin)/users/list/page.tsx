import CardSubTitle from "@/components/shared/core/card/card-sub-title";
import CardTitle from "@/components/shared/core/card/card-title";
import FlexRow from "@/components/shared/core/flex/flex-row";
import Card from "@core/card/card";
import FlexCol from "@shared/core/flex/flex-col";

const UsersListPage: React.FC = () => {
    return (
        <FlexCol className="gap-6">
            <div className="grid grid-cols-3 gap-4">
                {/* Total Pending */}

                <Card className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <span className="text-2xs">TOTAL PENDING</span>
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="9" y1="15" x2="9.01" y2="15" /><line x1="15" y1="15" x2="15.01" y2="15" /></svg>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) leading-none">4</div>
                    <FlexRow className="text-green-500 gap-2">
                        <span className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                        </span>
                        <span className="text-2xs">12% increase from last week</span>
                    </FlexRow>
                </Card>

                {/* Expiring Soon */}
                <Card className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <span className="text-2xs">EXPIRING SOON</span>
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) leading-none">5</div>
                    <div className="text-2xs">Invitations expire in less than 48h</div>
                </Card>

                {/* Avg Wait Time */}
                <Card className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <span className="text-2xs">AVG. WAIT TIME</span>
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) leading-none">2.4 Days</div>
                    <div className="text-2xs">Time before acceptance</div>
                </Card>
            </div>

            <Card>
                <FlexRow className="items-center justify-between mb-4">
                    <FlexCol>
                        <CardTitle title="Pending Invitations" />
                        <CardSubTitle title="Manage and track sent invitations that haven't been accepted yet." />
                    </FlexCol>
                    <div className="table-card-header">
                        <div className="table-search-row">
                            <div className="search-wrap">
                                {/* <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> */}
                                {/* <input className="search-input" type="text" placeholder="Search recipients..."> */}
                            </div>
                            <button className="btn-filter w-4 h-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            </button>
                        </div>
                    </div>
                </FlexRow>
            </Card>

            <Card>
                <FlexRow className="items-center justify-between mb-4">
                    <FlexCol>
                        <CardTitle title="Pending Invitations" />
                        <CardSubTitle title="Manage and track sent invitations that haven't been accepted yet." />
                    </FlexCol>
                    <div className="table-card-header">
                        <div className="table-search-row">
                            <div className="search-wrap">
                                {/* <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> */}
                                {/* <input className="search-input" type="text" placeholder="Search recipients..."> */}
                            </div>
                            <button className="btn-filter w-4 h-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            </button>
                        </div>
                    </div>
                </FlexRow>
            </Card>


            <Card>
                <FlexRow className="items-center justify-between mb-4">
                    <FlexCol>
                        <CardTitle title="Pending Invitations" />
                        <CardSubTitle title="Manage and track sent invitations that haven't been accepted yet." />
                    </FlexCol>
                    <div className="table-card-header">
                        <div className="table-search-row">
                            <div className="search-wrap">
                                {/* <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> */}
                                {/* <input className="search-input" type="text" placeholder="Search recipients..."> */}
                            </div>
                            <button className="btn-filter w-4 h-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            </button>
                        </div>
                    </div>
                </FlexRow>
            </Card>



            <Card>
                <FlexRow className="items-center justify-between mb-4">
                    <FlexCol>
                        <CardTitle title="Pending Invitations" />
                        <CardSubTitle title="Manage and track sent invitations that haven't been accepted yet." />
                    </FlexCol>
                    <div className="table-card-header">
                        <div className="table-search-row">
                            <div className="search-wrap">
                                {/* <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> */}
                                {/* <input className="search-input" type="text" placeholder="Search recipients..."> */}
                            </div>
                            <button className="btn-filter w-4 h-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            </button>
                        </div>
                    </div>
                </FlexRow>
            </Card>


            <Card>
                <FlexRow className="items-center justify-between mb-4">
                    <FlexCol>
                        <CardTitle title="Pending Invitations" />
                        <CardSubTitle title="Manage and track sent invitations that haven't been accepted yet." />
                    </FlexCol>
                    <div className="table-card-header">
                        <div className="table-search-row">
                            <div className="search-wrap">
                                {/* <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> */}
                                {/* <input className="search-input" type="text" placeholder="Search recipients..."> */}
                            </div>
                            <button className="btn-filter w-4 h-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            </button>
                        </div>
                    </div>
                </FlexRow>
            </Card>


            <Card>
                <FlexRow className="items-center justify-between mb-4">
                    <FlexCol>
                        <CardTitle title="Pending Invitations" />
                        <CardSubTitle title="Manage and track sent invitations that haven't been accepted yet." />
                    </FlexCol>
                    <div className="table-card-header">
                        <div className="table-search-row">
                            <div className="search-wrap">
                                {/* <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> */}
                                {/* <input className="search-input" type="text" placeholder="Search recipients..."> */}
                            </div>
                            <button className="btn-filter w-4 h-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            </button>
                        </div>
                    </div>
                </FlexRow>
            </Card>
        </FlexCol>

    );
}

export default UsersListPage;
