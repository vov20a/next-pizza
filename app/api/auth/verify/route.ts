

import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // <- add this to force dynamic render

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get('code');
    // const code = '';

    if (!code) {
      return NextResponse.json({ error: 'Неверный код' }, { status: 400 });
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        code,
      },
    });

    if (!verificationCode) {
      return NextResponse.json({ error: 'Неверный код' }, { status: 400 });
    }

    await prisma.user.update({
      where: {
        id: verificationCode.userId,
      },
      data: {
        verified: new Date(),
      },
    });

    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id,
      },
    });

    return NextResponse.redirect(new URL('/?verified', req.url));
  } catch (error) {
    console.log('[VERIFY_GET] Server error', error);
    return NextResponse.json({ message: '[VERIFY_GET] Server error' }, { status: 500 });
  }
}
