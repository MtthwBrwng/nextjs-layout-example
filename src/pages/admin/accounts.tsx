import * as React from "react"
import AdminLayout from "@/layouts/AdminLayout";
import {useAccountOverviewAdminQuery} from "@/graphql/generated";
import {Page} from "@/components/common/Page";

const AccountOverviewPage = () => {
    const {data, isLoading} = useAccountOverviewAdminQuery()

    return (
        <Page title={"Account Overview"} loading={isLoading}>
            Account Overview
        </Page>
    )
}

AccountOverviewPage.Layout = AdminLayout

export default AccountOverviewPage