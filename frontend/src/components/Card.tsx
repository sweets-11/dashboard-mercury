import CustomCard from "@/components/CustomCard";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface FinancialSummary {
    type: string;
    amount: string;
}

const financialSummary: FinancialSummary[] = [
    { type: "Credit Card", amount: "$12,505.87" },
    { type: "Treasury", amount: "$200,000.00" },
    { type: "Ops / Payroll", amount: "$2,023,267.12" },
    { type: "AP", amount: "$226,767.82" },
    { type: "AR", amount: "$0.00" }
];

const CardBox: React.FC = () => {
    return (
        <CustomCard title="Accounts">
            <Table className='p-55'>
                <TableBody>
                    {financialSummary.map((des, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-md font-medium w-96">{des.type}</TableCell>
                            <TableCell className="text-md text-right">{des.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CustomCard>
    );
};

export default CardBox;
