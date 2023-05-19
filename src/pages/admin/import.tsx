import * as React from "react"
import AdminLayout from "@/layouts/AdminLayout";
import {useForm, zodResolver} from "@mantine/form";
import {Button, Checkbox, Container, Group, MultiSelect, Paper, Select, Stack, Text, TextInput} from "@mantine/core";
import {z} from "zod"

interface FormProps {
    rows: [
        {
            firstName: '',
            lastName: '',
            email: '',
            ext: [],
            dids: [],
            accessLevel: 'user' | 'admin',
            hardware: {
                brand: '',
                model: '',
                macAddress: '',
                pendingMac: false,
            },
            requiresSoftphone: false,
            notes: '',
        }
    ]
}

const ImportAdminPage = () => {
    const deviceModelsList = []

    const {onSubmit, values, errors, getInputProps, insertListItem} = useForm<FormProps>({
        initialValues: {
            rows: [
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    ext: [],
                    dids: [],
                    accessLevel: 'user',
                    hardware: {
                        brand: '',
                        model: '',
                        macAddress: '',
                        pendingMac: false,
                    },
                    requiresSoftphone: false,
                    notes: '',
                }
            ]
        },
        validate: zodResolver(formValidation)
    })

    const handleSubmit = (values: FormProps) => {
        console.log(values)
    }

    return (
        <Container size={"lg"}>
            <form onSubmit={onSubmit(handleSubmit)}>
                <Stack>
                    {values?.rows?.map((value, index) => (
                        <Paper key={index}  radius={"sm"} sx={{overflow: "hidden"}} withBorder>
                            <Stack p={"xs"} bg={"blue"}>
                                <Text color={"white"} inherit>Row {index+1}</Text>
                            </Stack>
                            <Stack p={"xs"}>
                                <Group grow>
                                    <TextInput label={"First Name"} placeholder={"First Name"} {...getInputProps(`rows.${index}.firstName`)}/>
                                    <TextInput label={"Last Name"} placeholder={"Last Name"} {...getInputProps(`rows.${index}.lastName`)}/>
                                    <TextInput label={"Email Address"} placeholder={"Email Address"} {...getInputProps(`rows.${index}.email`)}/>
                                </Group>
                                <Group grow>
                                    <MultiSelect label={"Extension"} placeholder={"Extension"} data={[]} {...getInputProps(`rows.${index}.ext`)}/>
                                    <MultiSelect label={"Phone Numbers"} placeholder={"Phone Numbers"} data={[]} {...getInputProps(`rows.${index}.dids`)}/>
                                    <Select label={"Role"} placeholder={"Role"} data={[{value: 'user', label: 'User'}, {value: 'admin', label: 'Admin'}]} {...getInputProps(`rows.${index}.accessLevel`)}/>
                                </Group>
                                <Group grow>
                                    <Select label={"Device Model"} placeholder={"Device Model"} data={[{label: "iPhone", value: "iphone"}]} {...getInputProps(`rows.${index}.hardware.brand`)}/>
                                    <TextInput label={"Mac Address"} placeholder={"00:00:00:00:00:00"} {...getInputProps(`rows.${index}.hardware.macAddress`)}/>
                                    <Checkbox label={"Pending Audian MAC"} placeholder={"Pending Audian MAC"}/>
                                    <Checkbox label={"Requires Softphone"} placeholder={"Requires Softphone"}/>
                                </Group>
                            </Stack>
                        </Paper>
                    ))}
                    <Group position={"apart"}>
                        <Group>
                            <Button onClick={() => insertListItem('rows', {
                                firstName: '',
                                lastName: '',
                                email: '',
                                ext: [],
                                dids: [],
                                accessLevel: 'user',
                                hardware: {
                                    brand: '',
                                    model: '',
                                    macAddress: '',
                                    pendingMac: false,
                                },
                                requiresSoftphone: false,
                                notes: '',
                            })}>Add</Button>
                        </Group>
                        <Group>
                            <Button type={"submit"}>Submit</Button>
                            <Button type={"submit"}>Clear</Button>
                        </Group>

                    </Group>
                </Stack>
            </form>
        </Container>
    )
}

export const formValidation = z.object({
    rows: z.array(z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email(),
        ext: z.array(z.string().nonempty()).min(1, "Must include at least (1) extension"),
        dids: z.array(z.string()).min(1, "Must include at least (1) phone number"),
        accessLevel: z.enum(["user", "admin"]),
        hardware: z.object({
            brand: z.string().nonempty("Select device brand"),
            model: z.string().nonempty("Select device model"),
            macAddress: z.string().nonempty("Select device mac address"),
            pendingMac: z.boolean(),
        }).required(),
        requiresSoftPhone: z.boolean(),
        notes: z.string(),
    })),
})

ImportAdminPage.Layout = AdminLayout

export default ImportAdminPage