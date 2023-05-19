import {Flex, Grid, Button, TextInput, MultiSelect, Select, Text, Checkbox} from "@mantine/core";
import {getSelectNumbersAndValidateRowNumbers} from "./util/numbers";
import {isValidPhoneNumber} from 'libphonenumber-js'
import {UseFormReturnType} from "@mantine/form";
import {LocationImporterFormValues, NumbersListsProps} from "./LocationImporter.stepper";
import {useEffect, useState} from "react";
import {useDebouncedValue} from "@mantine/hooks";
import {set} from "lodash";

interface getImporterRowsProps {
    form: UseFormReturnType<LocationImporterFormValues>;
    index: number;
    allNumbers: NumbersListsProps[];
    setAllNumbers: Function;
    deviceModelsList: any[];
    setValidateRows: Function;
}

function UserRow({form, index, allNumbers, setAllNumbers, deviceModelsList, setValidateRows}: getImporterRowsProps) {
    //? First Name Input & Validation
    const [firstNameValue, setFirstNameValue] = useState(form.values.rows[index].first_name);
    const [debouncedFirstNameValue] = useDebouncedValue(firstNameValue, 500);


    useEffect(() => {
        console.log('USEEFECT 1')
        form.setFieldValue(`rows.${index}.first_name`, debouncedFirstNameValue);
        if (debouncedFirstNameValue === '') {
            form.setFieldError(`rows.${index}.first_name`, 'First Name is required');
        }
    }, [debouncedFirstNameValue]);

    //? Last Name Input & Validation
    const [lastNameValue, setLastNameValue] = useState(form.values.rows[index].last_name);
    const [debouncedLastNameValue] = useDebouncedValue(lastNameValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.last_name`, debouncedLastNameValue);
        if (debouncedLastNameValue === '') {
            form.setFieldError(`rows.${index}.last_name`, 'Last Name is required');
        }
    }, [debouncedLastNameValue]);

    //? Email Input & Validation
    const [emailValue, setEmailValue] = useState(form.values.rows[index].email);
    const [debouncedEmailValue] = useDebouncedValue(emailValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.email`, debouncedEmailValue);
        const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(debouncedEmailValue);

        if (!isEmail || debouncedEmailValue.length === 0) {
            form.setFieldError(`rows.${index}.email`, 'ROW Email is required or is invalid.');
            return;
        } else {
            setValidateRows(true);
        }
    }, [debouncedEmailValue]);

    //? Extension Input & Validation
    const [extValue, setExtValue] = useState(form.values.rows[index].ext);
    console.log()
    const [debouncedExtValue] = useDebouncedValue(extValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.ext`, debouncedExtValue);

        if (debouncedExtValue.length === 0) {
            form.setFieldError(`rows.${index}.ext`, 'ROW Extension is required');
            return;
        } else {
            setValidateRows(true);
        }
    }, [debouncedExtValue]);

    //? Access Level Input
    const [accessLevelValue, setAccessLevelValue] = useState(form.values.rows[index].access_level);
    const [debouncedAccessLevelValue] = useDebouncedValue(accessLevelValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.access_level`, debouncedAccessLevelValue);
    }, [debouncedAccessLevelValue]);

    //? Device Model Input & Validation
    const [deviceValue, setDeviceValue] = useState(form.values.rows[index].hardware.model);
    const [debouncedDeviceValue] = useDebouncedValue(deviceValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.hardware.model`, debouncedDeviceValue);
        const macAddress = form.values.rows[index].hardware.mac_address;

        if (debouncedDeviceValue === '' && macAddress !== '') {
            form.setFieldError(`rows.${index}.hardware.model`, 'ROW Model is required if MAC Address is provided');
        }
    }, [debouncedDeviceValue]);

    //? Mac Address Input & Validation
    const [macAddressValue, setMacAddressValue] = useState(form.values.rows[index].hardware.mac_address);
    const [debouncedMacAddressValue] = useDebouncedValue(macAddressValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.hardware.mac_address`, debouncedMacAddressValue);
        setValidateRows(true);
    }, [debouncedMacAddressValue]);

    //? Pending Mac Input
    const [pendingMacValue, setPendingMacValue] = useState<boolean>(form.values.rows[index].hardware.pending_mac);
    const [debouncedPendingMacValue] = useDebouncedValue(pendingMacValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.hardware.pending_mac`, debouncedPendingMacValue);
    }, [debouncedPendingMacValue]);

    //? Requires Softphone Input
    const [requiresSoftphoneValue, setRequiresSoftphoneValue] = useState(form.values.rows[index].requires_softphone);
    const [debouncedRequiresSoftphoneValue] = useDebouncedValue(requiresSoftphoneValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.requires_softphone`, debouncedRequiresSoftphoneValue);
    }, [debouncedRequiresSoftphoneValue]);

    //? Phone Numbers Input & Validation
    const [numberValue, setNumberValue] = useState(form.values.rows[index].dids);
    const [debouncedNumberValue] = useDebouncedValue(numberValue, 500);
    useEffect(() => {
        form.setFieldValue(`rows.${index}.dids`, debouncedNumberValue);

        setValidateRows(true);
    }, [debouncedNumberValue]);

    let {
        selectNumbers,
        invalidNumbers,
        invalidNumbersDetails
    } = getSelectNumbersAndValidateRowNumbers(index, allNumbers);

    console.log('debouncedFirstNameValue: ', debouncedFirstNameValue);
    const userExt = form.values.rows[index].ext.map((e: string) => {
        return {value: e, label: e};
    });

    return (
        <Flex
            key={index}
            direction={'column'}
            align={'center'}
            mb={form.values.rows.length - 1 === index ? 0 : 'lg'}
            p={'sm'}
        >
            <Grid
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[8],
                    borderRadius: theme.radius.sm,
                    border: `1px solid ${theme.colors.blue[9]}`,
                })}
            >
                <Grid.Col span={12}
                          sx={(theme) => ({
                              backgroundColor: theme.colors.blue[9],
                              borderBottom: `1px solid ${theme.colors.blue[9]}`,
                          })}
                >
                    <Text size={'lg'} color="white">Row {index + 2}</Text>

                </Grid.Col>



                <Grid.Col span={4}>
                    <MultiSelect
                        label="Extension"
                        placeholder="Extension"
                        data={userExt}
                        value={extValue}
                        onChange={(values) => {
                            setExtValue(values);
                        }}
                        onCreate={(query) => {
                            if (!isNaN(parseInt(query))) {
                                console.log('   - query: ', query);
                                setExtValue([...form.values.rows[index].ext, query]);
                                return query;
                            }
                        }}
                        creatable
                        searchable
                        getCreateLabel={(query) => `+ Create ${query}`}
                        error={form.errors && form.errors[`rows.${index}.ext`]}
                    />
                </Grid.Col>

                <Grid.Col span={6}>
                    <MultiSelect
                        data={selectNumbers}
                        label="Phone Numbers"
                        searchable
                        error={form.errors && form.errors[`rows.${index}.dids`]}

                        // error={invalidNumbers ? invalidNumbersDetails : false}
                        value={numberValue}
                        onChange={(values) => {
                            const removed = form.values.rows[index].dids.filter((value: string) => !values.includes(value));
                            const added = values.filter((value: string) => !form.values.rows[index].dids.includes(value));

                            if (removed.length > 0) {
                                removed.forEach((value: string) => {
                                    allNumbers.forEach((number: any, numIndex: number) => {
                                        if (number.id === value) {
                                            if (!isValidPhoneNumber(number.id, 'US')) {
                                                allNumbers.splice(numIndex, 1);
                                            } else {
                                                const targetToRemove = allNumbers[numIndex].owner.indexOf(index);
                                                allNumbers[numIndex].owner.splice(targetToRemove, 1)

                                                updatedNumberListNumberSettings(allNumbers, numIndex);
                                            }

                                            setAllNumbers([...allNumbers]);
                                        }
                                    });
                                });
                            }

                            if (added.length > 0) {
                                added.forEach((value: string) => {
                                    allNumbers.forEach((number: any, numIndex: number) => {
                                        if (number.id === value) {
                                            if (!number.owner.includes(index)) {
                                                allNumbers[numIndex].owner.push(index)
                                            }

                                            updatedNumberListNumberSettings(allNumbers, numIndex);
                                            setAllNumbers([...allNumbers]);
                                        }
                                    });
                                });
                            }

                            console.log('values: ', values);

                            setNumberValue(values);
                        }}
                    />
                </Grid.Col>



            </Grid>
        </Flex>
    );
}

function updatedNumberListNumberSettings(allNumbers: any[], numIndex: number) {
    if (allNumbers[numIndex].owner.length === 0) {
        allNumbers[numIndex].assigned = false;
    } else {
        allNumbers[numIndex].assigned = true;
    }

    if (allNumbers[numIndex].owner.length > 1) {
        allNumbers[numIndex].isError = true;
    } else {
        allNumbers[numIndex].isError = false;
    }
}

export default UserRow;

import { Box, Button, Flex, Modal, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { LocationImporterFormValues, LocationRowValues } from "../LocationImporter.stepper";
import { useDebouncedValue, useListState } from "@mantine/hooks";
import { useEffect, useState } from "react";
import UserRow from "../ImporterRows";

interface Step_1_ContentProps {
    formattedFileData: LocationRowValues[];
    formattedAccountData: {
        accountNumbers: string[];
        accountEmailAddresses: string[];
        accountUsersExt: string[];
        accountMacAddressList: string[];
        deviceModelsList: DeviceModelRow[] | [];
    }
    allNumbers: any[];
    setAllNumbers: Function;
    setValidForm: Function;
    validForm: boolean;
    setFormData: Function;
    formData: LocationRowValues[];
}

interface DeviceModelRow {
    value: string;
    label: string;
    group: string;
}

function Step_2_Content({ formattedFileData, formattedAccountData, allNumbers, setAllNumbers, setValidForm, validForm, setFormData, formData }: Step_1_ContentProps) {
    console.log('');
    console.log('[Step 2 Content]');
    const { accountNumbers, accountEmailAddresses, accountUsersExt, accountMacAddressList } = formattedAccountData;
    const [validateRows, setValidateRows] = useState(true);
    let importerRows = [] as any[];
    const form = useForm({
        initialValues: {
            rows: [
                {
                    first_name: '',
                    last_name: '',
                    email: '',
                    ext: [''],
                    dids: [''],
                    access_level: '',
                    hardware: {
                        brand: '',
                        model: '',
                        mac_address: '',
                        pending_mac: false,
                    },
                    requires_softphone: false,
                    notes: '',
                }
            ]
        },
        validate: {
            rows: {

                email: (email, values, path) => {
                    const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(email);
                    const rowIndex = path.split('.')[1];
                    const duplicates = values.rows.reduce<number[]>((result, currentRow, index) => {
                        if (currentRow.email === email && index !== parseInt(rowIndex)) {
                            result.push(index + 2);
                        }

                        return result;
                    }, [])

                    if (!isEmail || email.length === 0) {
                        return 'Invalid Email';
                    }

                    if (accountEmailAddresses.indexOf(email) > -1) {
                        return 'Email already exists on the account';
                    }

                    if (duplicates.length > 0) {
                        return `Email assigned to multiple users, on this row and ${duplicates.join(', ')}`;
                    }
                },

                dids: (dids, values, path) => {
                    for (let i = 0; i < dids.length; i++) {
                        const did = dids[i];
                        const rowIndex = path.split('.')[1];

                        if (did.length !== 12) {
                            return 'Invalid DID';
                        }

                        if (accountNumbers.indexOf(did) > -1) {
                            return 'DID already exists on the account';
                        }

                        for (let j = 0; j < values.rows.length; j++) {
                            for (let k = 0; k < values.rows[j].dids.length; k++) {
                                const rowDid = values.rows[j].dids[k];

                                if (rowDid === did && j !== parseInt(rowIndex)) {
                                    return `DID assigned to multiple users, on this row and ${j + 2}`;
                                }
                            }
                        }
                    }
                },

                ext: (exts, values, path) => {
                    const rowIndex = path.split('.')[1];

                    if (exts.length === 0) {
                        return 'FORM Extension is required';
                    }

                    for (let i = 0; i < exts.length; i++) {
                        const ext = exts[i];

                        if (ext.length < 2) {
                            return 'FORM Invalid Extension Length';
                        }

                        if (accountUsersExt.includes(ext)) {
                            return `FORM ${ext} is already in use on the account`;
                        }

                        for (let j = 0; j < values.rows.length; j++) {
                            for (let k = 0; k < values.rows[j].ext.length; k++) {
                                const rowExt = values.rows[j].ext[k];

                                if (rowExt === ext && j !== parseInt(rowIndex)) {
                                    return `Extension ${ext} assigned to multiple users, on this row and ${j + 2}`;
                                }
                            }
                        }
                    }
                },

                hardware: {
                    model: (model, values, path) => {
                        const rowIndex = path.split('.')[1];
                        const formData = values as unknown as LocationImporterFormValues;
                        const hardware = formData.rows[parseInt(rowIndex)].hardware;

                        if (model === '' && hardware.mac_address !== '') {
                            return 'Model is required if MAC Address is provided';
                        }
                    },
                    mac_address: (mac, values, path) => {
                        if (mac !== '' && mac.length !== 17) {
                            return 'Invalid MAC Address';
                        }

                        if (mac !== '' && accountMacAddressList.includes(mac)) {
                            return 'MAC Address already exists on the account';
                        }

                        const rowValues = values as unknown as LocationImporterFormValues;
                        const rowIndex = path.split('.')[1];
                        const duplicates = rowValues.rows.reduce<number[]>((result: number[], currentRow: LocationRowValues, index: number) => {
                            if (currentRow.hardware.mac_address === mac && index !== parseInt(rowIndex)) {
                                result.push(index + 2);
                            }

                            return result;
                        }, [])

                        if (mac !== '' && duplicates.length > 0) {
                            return `MAC Address assigned to multiple users, on this row and ${duplicates.join(', ')}`;
                        }
                    }
                }
            }
        }
    });

    useEffect(() => {
        if (form.isValid() && formData !== form.values.rows) {
            setValidForm(true);
            setFormData(form.values.rows);
        }

        if (!form.isValid() && validForm) {
            setValidForm(false);
            setFormData([]);
        }
    }, [form.isValid()]);

    if (form.values.rows.length !== formattedFileData.length) {
        form.setValues({
            rows: formattedFileData
        });

        return (
            <Text>Loading</Text>
        )
    } else {
        importerRows = formattedFileData.map((row: LocationRowValues, index: number) => {
            return (
                <UserRow
                    index={index}
                    form={form}
                    allNumbers={allNumbers}
                    setAllNumbers={setAllNumbers}
                    deviceModelsList={formattedAccountData.deviceModelsList}
                    setValidateRows={setValidateRows}
                />
            )
        });
    }

    if (validateRows) {
        console.log('VALIDATE ROWS');
        setValidateRows(false);
        form.validate();
    }

    // console.log('errors', form.errors);

    return (
        <Flex direction={'column'}>
            <Text size={'35px'} align="center">Validation & Editor</Text>
            <Text size={'xs'} align="center"  color="dimmed" mb={'sm'}>This step allows you to edit or fix errors for all the users, numbers, and devices. When all the data is valid you can continue to the next step. Keep in mind imports with over 50 users will experience some lag.</Text>

            <Box
                sx={{
                    // padding: '15px',
                    maxHeight: '64vh',
                    overflow: 'hidden',
                    overflowY: 'scroll',
                }}
            >
                {importerRows.length > 0 && (
                    importerRows
                )}
            </Box>
        </Flex>
    )
}

export default Step_2_Content;