export class RuleExecutionErrorInfo {
    ruleExecutionId: number;
    clientId: number;
    accountId: number;
    event: string;
    patientId: number;
    patientVisitId: number;
    patientTransactionId: number;
    ruleExecutionErrors: RuleErrorInfo[];
}

export class RuleErrorInfo{
    ruleExecutionErrorId: number;
    ruleId: number;
    ruleType: number;
    ruleErrorDescription: string;
    ruleExecutionId: number;
}