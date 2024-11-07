import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"


const financialSummary = [
    {
        type: "Credit Card",
        amount: "$12,505.87"
    },
    {
        type: "Treasury",
        amount: "$200,000.00"
    },
    {
        type: "Ops / Payroll",
        amount: "$2,023,267.12"
    },
    {
        type: "AP",
        amount: "$226,767.82"
    },
    {
        type: "AR",
        amount: "$0.00"
    }
];


const CardBox = () => {
    return (
        <Card className=" w-[500px] sm:mt-8 xl:mt-0 ml-3 p-2"
        >

            <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className='text-md'>Accounts</CardTitle>

                </div>
            </CardHeader>

            <div>
                <Table className='p-55'>
                    <TableBody>

                        {financialSummary.map((des) => {
                            return (
                                <TableRow>
                                    <TableCell className="text-lg font-medium w-96 cursor-pointer">{des.type}</TableCell>
                                    <TableCell className="text-md text-right">{`${des.amount}`}</TableCell>
                                </TableRow>

                            )
                        })}
                    </TableBody>

                </Table>
            </div>
        </Card>
    )
}

export default CardBox