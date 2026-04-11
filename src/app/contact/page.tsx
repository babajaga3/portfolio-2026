"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout";


export default function ContactPage() {
  return (
    <PageLayout.Main>
      <PageLayout.Nav>
        <Link className="hover:underline" href="/about">
          /contact
        </Link>
        <Link className="hover:underline" href="/projects">
          /projects
        </Link>
        <Link className="hover:underline" href="/contact">
          /archive
        </Link>
      </PageLayout.Nav>

      <PageLayout.Pane>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
      </PageLayout.Pane>
      <PageLayout.Pane>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
        <PageLayout.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          mollitia ex ipsa corporis quis! Eligendi consequatur maiores iusto quia
          voluptatibus voluptate tenetur accusantium fuga, suscipit ipsum numquam
          aliquid mollitia autem.
        </PageLayout.Text>
      </PageLayout.Pane>
    </PageLayout.Main>
  );
}
