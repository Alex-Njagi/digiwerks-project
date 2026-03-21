import { Box } from "@chakra-ui/react";
import AssetSummaryCard from "../components/AssetSummaryCard";
import AssetStats from "../components/AssetStats";
import VersionGrid from "../components/VersionGrid";
import { useState } from "react";
import VersionWindow from "../components/VersionWindow";
import { useLocation } from "react-router-dom";

export default function AssetWorkspace() {
    const location = useLocation();
    const asset = location.state?.asset;

    if (!asset) return <p>Asset not found</p>;

    const versions = asset.asset_versions

    const [isOpen, setIsOpen] = useState(false);
    const [selectedVersion, setSelectedVersion] = useState(null);

    const openVersion = (version) => {
        setSelectedVersion(version);
        setIsOpen(true);
    };

    return (
        <Box p={6}>
            <AssetSummaryCard asset = {asset} />
            <AssetStats asset = {asset}/>
            <VersionGrid 
                versions={versions}
                onVersionClick={openVersion}
            />
            {selectedVersion && (
            <VersionWindow
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                version={selectedVersion}
            />
            )}
                  
        </Box>
    );
}