export const registers: {
  [key: string]: number
} = {
  '$0': 0,
  '$at': 1,
  '$v0': 2,
  '$v1': 3,
  '$a0': 4,
  '$a1': 5,
  '$a2': 6,
  '$a3': 7,
  '$t0': 8,
  '$t1': 9,
  '$t2': 10,
  '$t3': 11,
  '$t4': 12,
  '$t5': 13,
  '$t6': 14,
  '$t7': 15,
  '$s0': 16,
  '$s1': 17,
  '$s2': 18,
  '$s3': 19,
  '$s4': 20,
  '$s5': 21,
  '$s6': 22,
  '$s7': 23,
  '$t8': 24,
  '$t9': 25,
  '$k0': 26,
  '$k1': 27,
  '$gp': 28,
  '$sp': 29,
  '$fp': 30,
  '$ra': 31,
}

export const instructions: {
  [key: string]: { code: number, type: 'R' | 'I' | 'J' }
} = {
  'add': { code: 32, type: 'R' },
  'sub': { code: 34, type: 'R' },
  'addi': { code: 8, type: 'I' },
  'addu': { code: 33, type: 'R' },
  'subu': { code: 35, type: 'R' },
  'addiu': { code: 9, type: 'I' },
  'mult': { code: 24, type: 'R' },
  'div': { code: 26, type: 'R' },
  'multu': { code: 25, type: 'R' },
  'divu': { code: 27, type: 'R' },
  'mfhi': { code: 16, type: 'R' },
  'mflo': { code: 18, type: 'R' },
  'and': { code: 36, type: 'R' },
  'or': { code: 37, type: 'R' },
  'nor': { code: 39, type: 'R' },
  'xor': { code: 38, type: 'R' },
  'andi': { code: 12, type: 'I' },
  'ori': { code: 13, type: 'I' },
  'xori': { code: 14, type: 'I' },
  'sll': { code: 0, type: 'R' },
  'srl': { code: 2, type: 'R' },
  'sra': { code: 3, type: 'R' },
  'sllv': { code: 4, type: 'R' },
  'srlv': { code: 6, type: 'R' },
  'srav': { code: 7, type: 'R' },
  'slt': { code: 42, type: 'R' },
  'sltu': { code: 43, type: 'R' },
  'slti': { code: 10, type: 'I' },
  'sltiu': { code: 11, type: 'I' },
  'j': { code: 2, type: 'J' },
  'jal': { code: 3, type: 'J' },
  'jr': { code: 8, type: 'R' },
  'jalr': { code: 9, type: 'R' },
  'beq': { code: 4, type: 'I' },
  'bne': { code: 5, type: 'I' },
  'syscall': { code: 12, type: 'R' },
  'lui': { code: 15, type: 'I' },
  'lb': { code: 32, type: 'I' },
  'lbu': { code: 36, type: 'I' },
  'lh': { code: 33, type: 'I' },
  'lhu': { code: 37, type: 'I' },
  'lw': { code: 35, type: 'I' },
  'sb': { code: 40, type: 'I' },
  'sh': { code: 41, type: 'I' },
  'sw': { code: 43, type: 'I' },
  'll': { code: 48, type: 'I' },
  'sc': { code: 56, type: 'I' },
}