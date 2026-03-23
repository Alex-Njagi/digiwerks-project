import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import AssetSummaryCard from "../components/AssetSummaryCard";
import AssetStats from "../components/AssetStats";
import VersionGrid from "../components/VersionGrid";
import { useState } from "react";
import VersionWindow from "../components/VersionWindow";
import { useParams } from "react-router-dom";
import { useAsset } from "../hooks/useAssetHooks";

export default function AssetWorkspace() {
    const { id } = useParams();
    const { asset, loading, error } = useAsset(id);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedVersion, setSelectedVersion] = useState(null);

    const openVersion = (version) => {
        setSelectedVersion(version);
        setIsOpen(true);
    };

    if (loading) {
        return (
            <Center h="50vh" flexDirection="column" gap={4}>
                <Spinner size="xl" thickness="4px" color="brand.pink" />
                <Text>Loading asset...</Text>
            </Center>
        );
    }

    if (error) return <p>{error}</p>;

    const versions = asset.asset_versions;
    // console.log(versions);
    

    return (
        <Box p={6}>
            <AssetSummaryCard asset={asset} />
            <AssetStats asset={asset} />
            <VersionGrid 
                asset={asset}
                versions={versions}
                onVersionClick={openVersion}
            />
            {selectedVersion && (
                <VersionWindow
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    version={selectedVersion}
                    asset={asset}
                />
            )}
        </Box>
    );
}