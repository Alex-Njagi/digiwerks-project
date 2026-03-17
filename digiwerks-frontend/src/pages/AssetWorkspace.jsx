import { Box } from "@chakra-ui/react";
import AssetSummaryCard from "../components/AssetSummaryCard";
import AssetStats from "../components/AssetStats";
import VersionGrid from "../components/VersionGrid";

export default function AssetWorkspace() {

    const asset = {
        asset_name: "Asset Name",
        asset_description: "Short description of the asset",
        tag: "Concept",
        versions: 3,
        owner: "user",
        project: "project",
        comments: 5
    }

    const versions = [
        { version_number: 1, change_notes: "Sample notes", file_url: "https://placehold.co/400x400"},
        { version_number: 2, change_notes: "Sample notes", file_url: "https://placehold.co/400x400"},
        { version_number: 3, change_notes: "Sample notes", file_url: "https://placehold.co/400x400"},
        { version_number: 4, change_notes: "Sample notes", file_url: "https://placehold.co/400x400"}
    ];

    return (
        <Box p={6}>
            <AssetSummaryCard asset = {asset} />
            <AssetStats asset = {asset}/>
            <VersionGrid versions={versions}/>      
        </Box>
    );
}