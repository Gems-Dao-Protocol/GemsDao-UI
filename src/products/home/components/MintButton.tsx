import { Button } from "@app/common/components/Buttons"
import { useGemsDao } from "@app/contexts"

export default function MintButton({ onClick }: { onClick: () => void }) {
    const { nftInfo, userInfo, currencyTokenInfo } = useGemsDao()

    return (
        <Button
            type="primary"
            onClick={onClick}
            style={{ width: '100%', padding: '20px', fontSize: '30px', fontWeight: 700 }}
            disabled={!(nftInfo && userInfo && currencyTokenInfo)}
        >
            Buy now
        </Button>
    )
}